import React from 'react';
import Image from 'next/image';

import { Col, Row } from 'antd';

import {
  MainWrapper
}
  from '../../styles/Main';

function Main() {
  return (
    <Row justify={'center'}>
      <Col span={24}>

        <Row>
          <Col span={22}>

            <MainWrapper>

            </MainWrapper>

          </Col>
        </Row>

      </Col>
    </Row>
  )
}

export default Main;
