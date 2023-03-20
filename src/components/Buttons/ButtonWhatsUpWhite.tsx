import React from 'react';
import { ButtonWhatsW } from '../../styles/Buttons';
import { WhatsAppOutlined } from "@ant-design/icons";

function ButtonWhatsWhite() {
  return (
    <ButtonWhatsW>
      <WhatsAppOutlined style={{ color: "white" }} />
      <p>Написать в Whats-up</p>
    </ButtonWhatsW>
  )
}

export default ButtonWhatsWhite;

