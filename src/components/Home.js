import React, { useRef } from "react";
import { json } from "react-router-dom";
import "./Home.css"

function Home() {
  //key: "c6cfae1d673547759d6fb162a9c7a62a",
  // secret: "iVC6Zreg5LScAMfyLcmz3cDhumlUHMvz",
  //access USa9laI45nBAvOigYCZYqkEbQAA1ckS61f
  const idRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const received = idRef.current.value;;
    
    fetch(
      "https://us.api.blizzard.com/data/wow/media/item/" +
        received +
        "?namespace=static-classic-us&locale=en_US&access_token=USa9laI45nBAvOigYCZYqkEbQAA1ckS61f",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((data) => data.json())
      .then((json) => {
        displayData(json.assets[0].value, received);
      })
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="container">
        <h3>Enter a world of warcraft item ID:</h3>
        <form onSubmit={handleSubmit}>
          <input ref={idRef} id="inputId" type="text" /> <br />
          <input type="submit" value="Enter" />
        </form>
        <img src="" className="icon"  />
        <p className="title"></p>
      </div>
    </>
  );
}

export default Home;

function displayData(data, id) {
  fetch(
    "https://us.api.blizzard.com/data/wow/item/" +
      id +
      "?namespace=static-classic-us&locale=en_US&access_token=USsPm6jQZbfS3rZ4PrGb5n42kB0qBheeMx",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((data) => data.json())
    .then((json) => {
      document.querySelector(".title").innerHTML = json.name;
    });

  const icon = data;
  const name = json.name;
  document.querySelector(".icon").src = icon;
  document.querySelector(".title").innerHTML = name;
}
