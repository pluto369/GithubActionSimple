import * as maptalks from "maptalks";
import styled from "styled-components";

import { useEffect } from "react";

const MapContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 800px;
  width: 100vw;
  overflow: hidden;
`;

function Map() {
  useEffect(() => {
    var map = new maptalks.Map("map", {
      center: [-0.113049, 51.498568],
      zoom: 14,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
      }),
    });
  }, []);

  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
}

export default Map;
