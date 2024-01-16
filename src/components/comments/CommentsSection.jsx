import { useAPiData } from "../../hooks/useAPiData"
import { SingleComment } from "./SingleComment"

const COMM_URL = `http://localhost:3000/api/comments/product`

export const CommentsSection = ({productID}) => {
  const pathToComments = `${COMM_URL}/${productID}`

  const [dataFromAPi,setDataFromAPi, apiError] = useAPiData(pathToComments)
  dataFromAPi && console.log('comments from API: ', dataFromAPi)


  return (
    <div className="flex flex-col gap-2">

      {dataFromAPi && dataFromAPi.map((comment)=> (
        <SingleComment key={comment.comm_id} comment={comment}/>
      ))}
    </div>
  )
}