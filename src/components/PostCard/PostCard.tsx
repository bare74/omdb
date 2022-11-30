import { FC } from "react";

import Search from "../../models/postModel";

interface PostProps {
  search: Search;
}

const PostCard: FC<PostProps> = (props) => {
  const {
    search: { Title, Year, imdbID, Type },
  } = props;

  return (
    <div className="card">
      <div className="card-header">{Title}</div>
      <div className="card-body">
        <h5 className="card-title">{Year}</h5>
        <p className="card-text">{imdbID}</p>
        <p className="card-text">{Type}</p>
      </div>
    </div>
  );
};

export default PostCard;
