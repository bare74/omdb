// import Card from "react-bootstrap/Card";
import { API_KEY } from "../services/ApiDetail";
import { BASE__URL } from "../services/ApiDetail";
import { Container, Card, Col } from "react-bootstrap";
import img_not_found from "../img/img_not_found.png";

import "../App.css";

const CardInfo = ({
  Title,
  imdbID,
  Poster,
  Type,
  ShowDetail,
  DetailRequest,
  ActivateModal,
}: {
  Title: any;
  imdbID: any;
  Poster: any;
  Type: any;
  ShowDetail: any;
  DetailRequest: any;
  ActivateModal: any;
}) => {
  const clickHandler = () => {
    ActivateModal(true);
    DetailRequest(true);

    fetch(`${BASE__URL}?i=${imdbID}&apikey=${API_KEY}`)
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
      <Container>
        <Col>
          <Card>
            <Card.Img
              className="photo"
              variant="top"
              src={Poster === "N/A" ? img_not_found : Poster}
              alt={Title}
              onClick={() => clickHandler()}
            />
            <Card.Body>
              <Card.Title>{Title === "N/A" ? " " : Title}</Card.Title>
              <Card.Text className="mb-2 text-muted">
                <span>{Type === "N/A" ? " " : Type}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </ul>
  );
};

export default CardInfo;
