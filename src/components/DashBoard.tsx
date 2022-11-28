import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import CardDetail from "./CardDetail";
import NavBar from "./NavBar";
import CardInfo from "./CardInfo";
// import { API_KEY, BASE__URL } from "../services/ApiDetail";
import Alert from "react-bootstrap/Alert";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";
import Loader from "./Loader";

import "../App.css";

function DashBoard() {
  const [data, setData] = useState([null]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputQuery, setInputQuery] = useState("Platoon");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 5;

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData([null]);

    fetch(
      `${process.env.REACT_APP_BASE_URL}?s=${inputQuery}&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    )
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

  const SortYear = () => {
    data.sort((a: any, b: any) => {
      if (a.Year < b.Year) return 1;
      if (a.Year > b.Year) return -1;
      return 0;
    });

    setData(data.sort());
    setLoading((current) => !current);
  };

  const SortSeries = () => {
    const Series = data.filter((a: any) => a?.Type === "series");
    setData(Series);
    setLoading((current) => !current);
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <div>
      <NavBar searchHandler={setInputQuery} />
      <div className="App button">
        <Button
          variant="outline-success"
          onClick={SortYear}
          style={{ margin: "20px", textAlign: "center" }}
        >
          Years
        </Button>
        <Button
          variant="outline-success"
          onClick={SortSeries}
          style={{ margin: "20px", textAlign: "center" }}
        >
          Series
        </Button>
        <Button
          variant="outline-success"
          onClick={SortYear}
          style={{ margin: "20px", textAlign: "center" }}
        >
          Movie
        </Button>
      </div>
      <div className="App">
        {loading && <Loader />}
        {error !== null && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Alert variant="danger">
              <Alert.Heading>{error}</Alert.Heading>
            </Alert>
          </div>
        )}

        {data !== null &&
          data.length > 0 &&
          data.map((result, index) => (
            <CardInfo
              Title={undefined}
              imdbID={undefined}
              Poster={undefined}
              Year={undefined}
              Type={undefined}
              ShowDetail={setShowDetail}
              DetailRequest={setDetailRequest}
              ActivateModal={setActivateModal}
              key={index}
              {...(result as unknown as Record<string, unknown>)}
            />
          ))}
      </div>
      <Modal
        className="modal-sm"
        show={activateModal}
        onClick={() => setActivateModal(false)}
      >
        {detailRequest === false ? (
          <CardDetail
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
      <div className="pagination container">
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

export default DashBoard;
