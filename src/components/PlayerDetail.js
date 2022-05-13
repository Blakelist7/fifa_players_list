import React from "react";
// import './playerDetail.scss';

function PlayerDetail(props) {
  console.log(props);
  const {
    Overall,
    Age,
    Height,
    Weight,
    PreferredFoot,
    Position,
    JerseyNumber,
  } = props.playerlist;
  return (
    <div className="ui group">
      <div className="ui container">
        <div>
          <div>
          <div style={{
            backgroundColor: "green",
            width: "20%",
            height: "30px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}><span>Overall {Overall}</span></div>
          </div>
          <div className="ui list" style={{
            padding: "17px",
            fontFamily: "monospace"
          }}>
            <div className="item" style={{
              margin: "10px"
            }}>Age <b>{Age}</b></div>
            <div className="item" style={{
              margin: "10px"
            }}>Height <b>{Height}</b></div>
            <div className="item" style={{
              margin: "10px"
            }}>Weight <b>{Weight}</b></div>
            <div className="item" style={{
              margin: "10px"
            }}>Preferred Foot <b>{PreferredFoot}</b></div>
            <div className="item" style={{
              margin: "10px"
            }}>Position <b>{Position}</b></div>
            <div className="item" style={{
              margin: "10px"
            }}>Jersey Number <b>{JerseyNumber}</b></div>
            <div className="item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
