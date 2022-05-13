import React from "react";
import './playerDetail.css';

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
    <div>
      {/* <div> */}
        {/* <div> */}
          {/* <div> */}
          {/* <div> */}
            <h1>Overall {Overall}</h1>
            {/* </div> */}
          {/* </div> */}
          <ul>
            <li style={{accentColor:"red"}}>
              <div className="title">
                Age 
              </div>
              <div className="descr">{Age}</div>
            </li>
            <li style={{accentColor:'#1286A8'}}>
              <div className="title">
                Height 
              </div>
              <div className="descr">{Height}</div>
            </li>
            <li style={{color:"#D2B53B"}}>
              <div className="title">
                Weight
              </div>
              <div className="descr">{Weight}</div>
            </li>
            <li style={{accentColor:"#0B374D"}}>
              <div className="title">
                Preferred Foot 
              </div>
              <div className="descr">{PreferredFoot}</div>
            </li>
            <li style={{accentColor:"#DA611E"}}>
              <div className="title">
                Position 
              </div>
              <div className="descr">{Position}</div>
            </li>
            <li style={{accentColor:"#0B374D"}}>
              <div className="title">
                Jersey Number 
              </div>
              <div className="descr">{JerseyNumber}</div>
            </li>
          </ul>
          {/* <div className="ui list" style={{
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
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default PlayerDetail;
