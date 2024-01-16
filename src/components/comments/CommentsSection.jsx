import { Link } from 'react-router-dom';
import { useAPiData } from '../../hooks/useAPiData';
import { SingleComment } from './SingleComment';
import { Sell } from '../pages/sell/Sell';
import { AddComment } from './AddComment';

const COMM_URL = `http://localhost:3000/api/comments/product`;

export const CommentsSection = ({ productID }) => {
  const pathToComments = `${COMM_URL}/${productID}`;

  const [dataFromAPi, setDataFromAPi, apiError] = useAPiData(pathToComments);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* <div className="bg-white opacity-30 w-full absolute h-full right-0 bottom-0 inset-x-1/2 inset-y-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="flex absolute right-0 bottom-0 inset-x-1/2 inset-y-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <AddComment />
        </div> */}
        <h1 className="font-semibold py-2">Comments ({dataFromAPi.length})</h1>
        <Link className="py-1 my-2 bg-sky-400 px-4 rounded text-white font-semibold">
          To comment
        </Link>
      </div>
      <div className="bg-white p-4 flex flex-col gap-2">
        {dataFromAPi &&
          dataFromAPi.map((comment) => <SingleComment key={comment.comm_id} comment={comment} />)}
      </div>
    </>
  );
};
