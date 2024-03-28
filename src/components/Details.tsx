import { Card, Container, ListGroup } from "react-bootstrap";
import { Result } from "../interfaces/Articles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleDetailsOK = function () {
  const [details, setDetails] = useState<Result>();
  const param = useParams();

  const fetchDetails = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + param.articleId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("call problem");
        }
      })
      .then((article: Result) => {
        console.log(article);
        setDetails(article);
      })
      .catch((e) => console.log("errore", e));
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return null;
  }

  return (
    details && (
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={details.image_url} />
          <Card.Body>
            <Card.Title>{details.image_url}</Card.Title>
            <Card.Text>{details.summary}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    )
  );
};
export default ArticleDetailsOK;
