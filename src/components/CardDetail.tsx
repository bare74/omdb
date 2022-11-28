import Card from "react-bootstrap/Card";
import img_not_found from "../img/img_not_found.png";

const CardDetail = ({
  Title,
  Poster,
  Actors,
  imdbRating,
  Rated,
  Runtime,
  Genre,
  Plot,
}: {
  Title: any;
  Poster: any;
  Actors: any;
  imdbRating: any;
  Rated: any;
  Runtime: any;
  Genre: any;
  Plot: any;
}) => {
  return (
    <div className="card-detail">
      <Card.Img
        src={Poster === "N/A" ? img_not_found : Poster}
        alt={Title}
        // style={{
        //   borderRadius: "5%",
        //   border: "1px solid black",
        //   height: "300px",
        //   width: "200px",
        // }}
      />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Rating <span>{imdbRating === "N/A" ? " " : imdbRating}</span>
        </Card.Subtitle>
        <Card.Text>{Plot}</Card.Text>
        <Card.Text>Skuespillere : {Actors === "N/A" ? " " : Actors}</Card.Text>
        <Card.Text>Rated: {Rated === "N/A" ? " " : Rated}</Card.Text>
        <Card.Text>Lengde:{Runtime === "N/A" ? " " : Runtime}</Card.Text>
        <Card.Text>Genre:{Genre === "N/A" ? " " : Genre}</Card.Text>
      </Card.Body>
    </div>
  );
};

export default CardDetail;
