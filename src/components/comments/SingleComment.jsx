export const SingleComment = ({ comment }) => {
  const date = new Date(comment.comm_date).toLocaleString('lt', { dateStyle: 'short' });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center py-1">
        <h1 className="font-semibold">{comment.comm_author}</h1>
        <div className="date text-xs">{date}</div>
      </div>
      <div className="flex">{comment.comm_context}</div>
    </div>
  );
};
