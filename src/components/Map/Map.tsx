import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MapSection() {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.7583443, 37.6270492], zoom: 17 }}>
          <Placemark geometry={[55.75836568947469, 37.62669791045981]} />
        </Map>
      </div>
    </YMaps>
  );
}

export default MapSection;
