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
        //gets Thunderfury by default, first query is for the icon, secondary query is for the item name
        "https://us.api.blizzard.com/data/wow/media/item/" +
          id +
          "?namespace=static-classic-us&locale=en_US&access_token=USNskXFCrXVCqE49TlyCVmPL33q2D1c5X7",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((json) => {
          setIcon(json.assets[0].value);
          fetch(
            "https://us.api.blizzard.com/data/wow/item/" +
              json.id +
              "?namespace=static-classic-us&locale=en_US&access_token=USNskXFCrXVCqE49TlyCVmPL33q2D1c5X7",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
            .then((data) => data.json())
            .then((json) => {
              setItem(json.name);
            });
        });    
  });

  return (
    <>
      <div className="container">
        <h2 className="heading">Enter a world of warcraft item ID:</h2>
        <div className="subcontainer">
          {id ? <img src={icon} className="icon" alt="If this text is visible that means the API key is expired. Check back soon!" /> : null}
          <p>{item}</p>
          <input
            onChange={(e) => setId(e.target.value)}
            id="inputId"
            type="text"
          />{" "}
        </div>
        <br />
      </div>
    </>
  );
}

export default Home;