import React from "react";
import { Row, Col } from "antd";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import {MapWrapper} from '../../styles/Map';

function MapSection() {
  return (
    <MapWrapper>
      <Row>
        <Col span={24}>
          <YMaps>
            <Map
              defaultState={{ center: [55.7583443, 37.6270492], zoom: 17 }}
              width={"100vw"}
              height={"35vh"}
            >
              <Placemark geometry={[55.75836568947469, 37.62669791045981]} />
            </Map>
          </YMaps>
        </Col>
      </Row>
    </MapWrapper>
  );
}

export default MapSection;
