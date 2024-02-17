import axios from 'axios';
import { useAuthContext } from '../contexts/authContext';
import { useMsgContext } from '../contexts/msgContext';

export const SingleComment = ({ comment, setDataFromAPi }) => {
  const { username, token } = useAuthContext();
  const { addMsg } = useMsgContext();

  const DEL_COMM_URL = `http://localhost:3000/api/comments/${comment.comm_id}`;

  const auth = !!(username === comment.comm_author);

  const date = new Date(comment.comm_date).toLocaleString('lt', {
    dateStyle: 'short',
  });

  const handleDeleteComm = () => {
    axios
      .delete(DEL_COMM_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('res: ', response.data.msg);
        setDataFromAPi((prevS) =>
          prevS.filter((com) => com.comm_id !== comment.comm_id),
        );
        addMsg('bg-green-200', `${response.data.msg}`);

        // navigate('/');
      })
      .catch((error) => {
        console.log('error ===', error.response);
      });
  };

  return (
    <div className="flex gap-4 items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center py-1">
          <h1 className="font-semibold">{comment.comm_author}</h1>
          <div className="date text-xs">{date}</div>
        </div>
        <div className="flex">{comment.comm_context}</div>
      </div>
      {auth && (
        <div className="delete">
          <button onClick={handleDeleteComm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
