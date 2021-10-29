import React from "react";
import { Link } from "react-router-dom";
import PlayerDetail from "./PlayerDetail";
import RadarChart from "./RadarChart";
import "./ContactDesign.css";

function ContactCard(props) {
  const { image, Name } = props.location.state.contact;
  console.log(props);
  return (
    <div
      className="main"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="player-image"
        style={{
          marginTop: "40px",
        }}
      >
        <div className="image" style={{
          marginTop: "10px"
        }}>
          <img src={image} alt="user" style={{
            height: "150px",
            width: "250px",
            borderRadius: "20px"
          }}/>
        </div>
        <div className="content">
          <div className="header" style={{
            backgroundColor: "white",
            padding: "5px 5px 5px 5px",
            borderRadius: "8px",
            marginBottom: "20px"
          }}>{Name}</div>
        </div>
      </div>

      <div className="outer">
        <div className="left">
          <RadarChart playerlist={props.location.state.contact} />
        </div>
        <div className="right">
          <PlayerDetail playerlist={props.location.state.contact} />
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button center">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
