import { Link } from 'react-router-dom';
import { useAPiData } from '../../hooks/useAPiData';
import { SingleComment } from './SingleComment';

const COMM_URL = `http://localhost:3000/api/comments/product`;

export const CommentsSection = ({ productID }) => {
  const pathToComments = `${COMM_URL}/${productID}`;

  const [dataFromAPi, setDataFromAPi, apiError] = useAPiData(pathToComments);
  dataFromAPi && console.log('comments from API: ', dataFromAPi);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold py-2">Comments ({dataFromAPi.length})</h1>
        <Link className="py-1 my-2 bg-sky-400 px-4 rounded">To comment</Link>
      </div>
      <div className="bg-white p-4 flex flex-col gap-2">
        {dataFromAPi &&
          dataFromAPi.map((comment) => <SingleComment key={comment.comm_id} comment={comment} />)}
      </div>
    </>
  );
};
