import React from 'react';
import Image from 'next/image';

import { Col, Row } from 'antd';
import { PhoneFilled, WhatsAppOutlined } from '@ant-design/icons';

import {
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledPhone,
  StyledButtonWhatsUp,
  StyledText
} from '../../../styles/Header';

import logo from '../../assets/Header/logo.svg';
import background from '../../assets/Header/background.jpg';

const Header = () => {
  return (
    <Row>
      <Col span={24}>

        {/* <StyledHeader> */}
          <Image src={background} alt='background' sizes='100vw'
          style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover'}}
          />
        {/* </StyledHeader> */}

        <Row justify={'center'}>
          <Col span={22}>

            <StyledNavbar>
              <StyledLogo><Image src={logo} alt="Logo" width={`180`} /></StyledLogo>
              <StyledPhone style={{ color: 'white' }}><PhoneFilled /><h2>+7 800 000 00 00</h2></StyledPhone>
              <StyledButtonWhatsUp><WhatsAppOutlined style={{ color: 'white' }} /><p>Написать в Whats-up</p></StyledButtonWhatsUp>
            </StyledNavbar>

            <StyledText>
              <h1>Заполним декларацию 3-НДФЛ</h1>
              <h2>Бесплатная консультация специалиста</h2>
              <h2>Оплата после выполнения</h2>
              <h2>Сопровождение до завершения проверки декларации</h2>
            </StyledText>

            

          </Col>
        </Row>

      </Col>
    </Row>
  )
}

export default Header;