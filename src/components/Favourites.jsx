import React, { useState, useEffect } from "react";
import "./NewsApi.css";
export default function Favorites() {
  const [fav_Data, setData] = useState([]);
  const [fav_Data_local, setData_local] = useState([]);

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("fav_data"));

    setData_local(d);
    localStorage.setItem("fav_data_local", d);

    console.log("nice to meet you");
    // console.log(d);
  }, []);

  const showFavNews = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("fav_data"));
    if (dataFromLocalStorage != []) {
      console.log(dataFromLocalStorage);
      const parsedData = dataFromLocalStorage;
      console.log("coming data");
      console.log(parsedData);
      setData(parsedData);
      setData_local(...fav_Data_local, JSON.stringify(dataFromLocalStorage));
      // console.log("###################3");
      localStorage.setItem("fav_data_local", fav_Data_local);
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Favourite News</h1>

      <div>
        <button onClick={showFavNews}>Refresh</button>
        <h1>News</h1>
        {fav_Data_local.map((newsItem, index) => (
          <div key={index} className="news-item">
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
