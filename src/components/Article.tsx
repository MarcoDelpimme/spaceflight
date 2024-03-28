import Carousel from "react-bootstrap/Carousel";
import { Result } from "../interfaces/Articles";

interface ArticleProps {
  articleDetail: Result;
}

const Article = function (props: ArticleProps) {
  return (
    <Carousel.Item>
      <img src={props.articleDetail.image_url} alt="" />
      <Carousel.Caption>
        <h3>{props.articleDetail.title}</h3>
        <p>{props.articleDetail.summary}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default Article;
