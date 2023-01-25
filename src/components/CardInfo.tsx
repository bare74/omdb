import Card from "react-bootstrap/Card";
import img_not_found from "../img/img_not_found.png";
import "../App.css";

const CardInfo = ({
  Title,
  imdbID,
  Poster,
  Type,
  Year,
  ShowDetail,
  DetailRequest,
  ActivateModal,
}: {
  Title: any;
  imdbID: any;
  Poster: any;
  Type: any;
  Year: any;
  ShowDetail: any;
  DetailRequest: any;
  ActivateModal: any;
}) => {
  const clickHandler = () => {
    ActivateModal(true);
    DetailRequest(true);

    fetch(
      `${process.env.REACT_APP_BASE_URL}?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}`,
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
        DetailRequest(false);
        ShowDetail(response);
      })
      .catch(() => {
        DetailRequest(false);
      });
  };

  return (
    <>
      <Card.Body>
        <Card.Img
          variant="top"
          src={Poster === "N/A" ? img_not_found : Poster}
          alt={Title}
          onClick={() => clickHandler()}
        />
        <Card.Title>{Title === "N/A" ? " " : Title}</Card.Title>
        <Card.Text className="mb-2 text-muted">
          <span>{Year === "N/A" ? " " : Year}</span>
        </Card.Text>
        <Card.Text className="mb-2 text-muted">
          <span>{Type === "N/A" ? " " : Type}</span>
        </Card.Text>
      </Card.Body>
    </>
  );
};

export default CardInfo;
