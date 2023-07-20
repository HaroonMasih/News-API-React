import React, { useEffect, useState } from "react";
import "./NewsApi.css";
import { json } from "react-router-dom";

const NewsApi = () => {
  const [articles, setArticles] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [iconClass, setIconClass] = useState("fa fa-heart-o");
  let [favSearch, setFavSearch] = React.useState([]);
  const fetchArticles = (term) => {
    const url =
      `https://newsapi.org/v2/everything?q=` +
      term +
      `&sortBy=publishedAt&apiKey=101e6fb3655a4852860f1313c07db442`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        // console.log(articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchNews = () => {
     let term = searchTerm;
    term = term.trim();
    if (term) {
      fetchArticles(term);
    }
  };

  // const filteredArticles = articles.filter((article) => {
  //   return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const handleFavSearch = async (e) => {
    let index = e.currentTarget.id;
    console.log(index);
    console.log(articles[index].title);
    console.log(articles[index].description);
    console.log(articles[index].url);
    let dict = {
      title: articles[index].title,
      description: articles[index].description,
      url: articles[index].url,
    };
    await setFavSearch([...favSearch, dict]);
  };
  useEffect(() => {
    if (favSearch) {
       localStorage.setItem("fav_data", JSON.stringify(favSearch));
      // localStorage.setItem("fav_data_local", JSON.stringify(favSearch));
    }
  },[favSearch]);

  return (
    <>
      <div className="container">
        <div className="input-section">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="form-control"
            id="search_input"
          />
          <button
            onClick={searchNews}
            id="search_btn"
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="container-inner-box">
          {articles.map((article, index) => (
            <div key={index} className="news-item" id={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="blank" className="read-more">
                Read more
              </a>
              <button className="btn" onClick={handleFavSearch} id={index}>
                {" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsApi;
