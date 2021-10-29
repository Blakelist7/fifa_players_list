import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart(props) {
  console.log(props)
  const {Crossing, Finishing, HeadingAccuracy, ShortPassing, Volleys} = props.playerlist
  return (
    <div style={{
      width:"800px",
      height:"400px"
    }}>
      <Radar
        data={{
          labels: [
            "Crossing",
            "Finishing",
            "Heading Accuracy",
            "Short Passing",
            "Volleys",
          ],
          datasets: [
            {
              data: [Crossing, Finishing, HeadingAccuracy, ShortPassing, Volleys],
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointRadius:"6",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
              borderWidth: 3,
            },
          ],
        }}
        options={{
          maintainAspectRatio:false,
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              suggestedMin: 50,
              suggestedMax: 100,
            },
          },
        }}
      />
    </div>
  );
}

export default RadarChart;
