import { useEffect, useState } from "react";
import { Data, Result } from "../interfaces/Articles";
import { Carousel } from "react-bootstrap";
import Article from "./Article";

const FetchComponent = function () {
  const [articles, setArticles] = useState<Result[]>([]);

  const fetchArticle = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("call problem");
        }
      })
      .then((data: Data) => {
        console.log(data);
        setArticles(data.results);
      })
      .catch((e) => console.log("errore", e));
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Carousel>
      {articles.map((a) => (
        <Article articleDetail={a} key={a.id}></Article>
      ))}
    </Carousel>
  );
};

export default FetchComponent;
