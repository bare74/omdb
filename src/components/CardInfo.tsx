// import Card from "react-bootstrap/Card";
import { API_KEY, BASE__URL } from "../services/ApiDetail";
import { Card } from "react-bootstrap";
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

    fetch(`${BASE__URL}?i=${imdbID}&apikey=${API_KEY}`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    })
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        DetailRequest(false);
        ShowDetail(response);
      })
      .catch(({ message }) => {
        DetailRequest(false);
      });
  };

  return (
    <ul className="box">
      <Card.Img
        className="photo"
        variant="top"
        src={Poster === "N/A" ? img_not_found : Poster}
        alt={Title}
        onClick={() => clickHandler()}
        style={{
          borderRadius: "5%",
          height: "300px",
          width: "200px",
        }}
      />
      <Card.Body>
        <Card.Title>{Title === "N/A" ? " " : Title}</Card.Title>
        <Card.Text className="mb-2 text-muted">
          <span>{Year === "N/A" ? " " : Year}</span>
        </Card.Text>
        <Card.Text className="mb-2 text-muted">
          <span>{Type === "N/A" ? " " : Type}</span>
        </Card.Text>
      </Card.Body>
    </ul>
  );
};

export default CardInfo;
