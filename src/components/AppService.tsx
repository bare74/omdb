import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import MovieDetail from "./CardDetail";
import NavBar from "./NavBar";
import ColCardBox from "./CardInfo";
import { API_KEY } from "../services/ApiDetail";
import { BASE__URL } from "../services/ApiDetail";
import Alert from "react-bootstrap/Alert";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import "../App.css";

const Loader = () => (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function AppService() {
  const [data, setData] = useState([null]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputQuery, setInputQuery] = useState("Platoon");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 5;

  console.log(currentPage);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData([null]);

    fetch(`${BASE__URL}?s=${inputQuery}&page=${currentPage}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [inputQuery, currentPage]);

  return (
    <div className="App">
      <NavBar searchHandler={undefined} />
      <SearchInput searchHandler={setInputQuery} />

      {loading && <Loader />}
      {error !== null && (
        <div
          style={{
            textAlign: "center",
            margin: "30px",
          }}
        >
          <Alert variant="danger" style={{ margin: "20px" }}>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        </div>
      )}

      {data !== null &&
        data.length > 0 &&
        data.map((result, index) => (
          <ColCardBox
            Title={undefined}
            imdbID={undefined}
            Poster={undefined}
            Type={undefined}
            ShowDetail={setShowDetail}
            DetailRequest={setDetailRequest}
            ActivateModal={setActivateModal}
            key={index}
            {...(result as unknown as Record<string, unknown>)}
          />
        ))}

      <Modal
        size="sm"
        show={activateModal}
        onClick={() => setActivateModal(false)}
      >
        {detailRequest === false ? (
          <MovieDetail
            Poster={undefined}
            Actors={undefined}
            imdbRating={undefined}
            Rated={undefined}
            Runtime={undefined}
            Genre={undefined}
            Plot={undefined}
            Title={undefined}
            {...(detail as unknown as Record<string, unknown>)}
          />
        ) : (
          <Loader />
        )}
      </Modal>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={5}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AppService;
