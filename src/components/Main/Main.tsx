import React from 'react';
import Image from 'next/image';

import { Col, Row } from 'antd';

import {
  StyledMain,
  StyledCard
}
  from '../../styles/Main';

export default function Main() {
  return (
    <Row>
      <Col span={24}>

        <Row>
          <Col span={22}>

            <StyledMain>
              <StyledCard>

              </StyledCard>
            </StyledMain>

          </Col>
        </Row>

      </Col>
    </Row>
  )
}
