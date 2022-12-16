import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [id, setId] = useState("19019");
  const [icon, setIcon] = useState("");
  const [item, setItem] = useState(
    "Thunderfury, Blessed Blade of the Windseeker"
  );
  useEffect(() => {
    
      fetch(
        "https://us.api.blizzard.com/data/wow/media/item/" +
          id +
          "?namespace=static-classic-us&locale=en_US&access_token=USryat4liGKBL1nM11uM7HkXsCf0Mjx5hN",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((json) => {
         // console.log(json);

          setIcon(json.assets[0].value);
          //console.log(json.id);
          fetch(
            "https://us.api.blizzard.com/data/wow/item/" +
              json.id +
              "?namespace=static-classic-us&locale=en_US&access_token=USryat4liGKBL1nM11uM7HkXsCf0Mjx5hN",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          ).then((data) => data.json())
          .then((json) => {
           // console.log(json.name);         
            setItem(json.name);  
          });
        });    
  });

  return (
    <>
      <div className="container">
        <h2>Enter a world of warcraft item ID:</h2>
        {id ? <img src={icon} className="icon" /> : null}
        <p>{item}</p>
        <p>Current value: {id}</p>
        <input
          onChange={(e) => setId(e.target.value)}
          id="inputId"
          type="text"
        />{" "}
        <br />
      </div>
    </>
  );
}

export default Home;