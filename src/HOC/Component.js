import { withListWrapper } from ".";

const ListComments = ({ comments, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      {comments.map((comm, i) => {
        return <p key={i}>{comm.text}</p>;
      })}
    </div>
  );
};
export const ListCommentsComponent = withListWrapper(ListComments);
