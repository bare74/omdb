import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import Loader from "../components/Ui/Loader";
import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../features/posts/postSlice";

const App1: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { loading, data } = useAppSelector((state) => state);

  console.log(data);

  return (
    <div className="container py-5">
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          data !== null &&
          data.length > 0 &&
          data.map((search, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <PostCard search={search} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App1;
