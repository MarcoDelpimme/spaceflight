import Carousel from "react-bootstrap/Carousel";
import { Result } from "../interfaces/Articles";

import { Link } from "react-router-dom";

interface ArticleProps {
  articleDetail: Result;
}

const Article = function (props: ArticleProps) {
  return (
    <>
      <Link to={`./${props.articleDetail.id}`}>
        <img src={props.articleDetail.image_url} alt="image1" height={500} />
        <Carousel.Caption id="carouselCap">
          <h3>{props.articleDetail.title}</h3>
          <p>{props.articleDetail.summary}</p>
        </Carousel.Caption>
      </Link>
    </>
  );
};

export default Article;
