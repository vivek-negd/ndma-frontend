import React, { useEffect } from "react";

const IndiaMap = () => {

  useEffect(() => {
    // Avoid duplicate script injection (e.g. React Strict Mode double-mount)
    if (document.getElementById("simplemaps-mapdata")) {
      if (window.simplemaps_countrymap) {
        window.simplemaps_countrymap.load();
      }
      return;
    }

    const script1 = document.createElement("script");
    script1.id = "simplemaps-mapdata";
    script1.src = "/maps/mapdata.js";
    script1.async = false;

    const script2 = document.createElement("script");
    script2.id = "simplemaps-countrymap";
    script2.src = "/maps/countrymap.js";
    script2.async = false;

    script2.onload = () => {
      if (window.simplemaps_countrymap) {
        window.simplemaps_countrymap.load();
      }
    };

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div id="map"></div>
    </div>
  );
};

export default IndiaMap;
