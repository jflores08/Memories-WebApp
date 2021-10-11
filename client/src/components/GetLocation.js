import React from "react";

export default function GeoLocation () {
  
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log('granted: ',result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log('prompt: ',result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log('denied: ',result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  
  
    return (
      <div>
        <h2>GeoLocation</h2>
      </div>
    );
  
}