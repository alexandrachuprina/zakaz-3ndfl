import React from "react";
import { ButtonWhatsB } from "../../styles/Buttons";
import { WhatsAppOutlined } from "@ant-design/icons";

function ButtonWhatsBlack() {
  return (
    <ButtonWhatsB>
      <WhatsAppOutlined style={{ color: "black" }} />
      <p>Написать в Whats-up</p>
    </ButtonWhatsB>
  );
}

export default ButtonWhatsBlack;
