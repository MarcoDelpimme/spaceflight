import { Button, Card, Container, Row } from "react-bootstrap";
import { Result } from "../interfaces/Articles";
import { Link, useParams } from "react-router-dom";
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
      <Container fluid>
        <Row>
          <div className="col">
            <img src={details.image_url} className="img-fluid" alt="Hero" />
            <div className="mt-4">
              <h2>{details.title}</h2>
              <p>{details.summary}</p>
              <p>Publish at {details.published_at.toString()}</p>
            </div>
            <Link to="/">
              <Button>HOME</Button>
            </Link>
          </div>
        </Row>
      </Container>
    )
  );
};
export default ArticleDetailsOK;
