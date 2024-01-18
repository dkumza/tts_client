import { Link } from 'react-router-dom';
import { useAPiData } from '../../hooks/useAPiData';
import { SingleComment } from './SingleComment';
import { Sell } from '../pages/sell/Sell';
import { AddComment } from './AddComment';
import { useAuthContext } from '../contexts/authContext';
import { useState } from 'react';

const COMM_URL = `http://localhost:3000/api/comments/product`;

export const CommentsSection = ({ productID }) => {
  const [comment, setComment] = useState(false);

  const { username } = useAuthContext();
  const pathToComments = `${COMM_URL}/${productID}`;

  const [dataFromAPi, setDataFromAPi, apiError] = useAPiData(pathToComments);

  const handleComment = () => {
    setComment((prev) => !prev);
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold py-2">
          Comments ({!dataFromAPi ? '0' : dataFromAPi.length})
        </h1>
        {username && (
          <button
            onClick={handleComment}
            className="py-1 my-2 bg-sky-400 px-4 rounded text-white font-semibold"
          >
            To comment
          </button>
        )}
        {!username && (
          <Link
            to={'/login'}
            className="py-1 my-2 bg-sky-100 px-4 rounded text-stone-500 hover:bg-sky-400 hover:text-white font-semibold"
          >
            Sing In to comment
          </Link>
        )}
      </div>
      {comment && (
        <AddComment
          handleComment={handleComment}
          setComment={setComment}
          productID={productID}
          setDataFromAPi={setDataFromAPi}
        />
      )}
      <div className="flex flex-col gap-2 rounded">
        {dataFromAPi &&
          dataFromAPi.map((comment) => (
            <SingleComment
              key={comment.comm_id}
              comment={comment}
              setDataFromAPi={setDataFromAPi}
            />
          ))}
      </div>
    </div>
  );
};
