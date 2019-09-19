import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function TitleList(props) {
  const [data, setData] = useState("");
  const [mounted, setMounted] = useState("");

  useEffect(() => {
    let requestUrl =
      process.env.REACT_APP_API +
      props.url +
      "&api_key=" +
      process.env.REACT_APP_APIKEY +
      "&language=pt-BR";
    fetch(requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log("There has been an error");
      });

    setMounted(true);
  }, [props.url]);

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {data.results
            ? data.results.map((title, i) => {
                if (i < 5) {
                  var name = "";
                  var backDrop =
                    process.env.REACT_APP_API_URL_IMAGE + title.backdrop_path;
                  if (!title.name) {
                    name = title.original_title;
                  } else {
                    name = title.name;
                  }

                  return (
                    <Item
                      key={title.id}
                      title={name}
                      score={title.vote_average}
                      overview={title.overview}
                      backdrop={backDrop}
                    />
                  );
                } else {
                  return <div key={title.id}></div>;
                }
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
