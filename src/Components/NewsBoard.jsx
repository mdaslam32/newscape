import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import ShimmerBoard from "./Shimmer/ShimmerBoard";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  if (articles.length === 0) {
    return <ShimmerBoard />;
  }
  return (
    <div className="board">
      <h2 className="text-center mt-2">
        Latest <span className="badge bg-danger"> News </span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            author={news.author}
            name={news.source.name}
            img={news.urlToImage}
            url={news.url}
            publish={news.publishedAt}
          />
        );
      })}
    </div>
  );
};
export default NewsBoard;
