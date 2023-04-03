import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import HeaderForm from "@/src/components/HeaderForm";
import Image from "next/image";
import { ImageWrapper, Section, Wrapper } from "@/src/styles/OrderForm";
// import icon from "../../assets/OrderForm/icon.svg";
import ButtonWhatsBlack from "../Buttons/ButtonWhatsUpBlack";

function OrderForm() {
  const [link, setLink] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/order-form?populate=*")
      .then((response: any) => {
        const info = response.data.data.attributes.orderIcon.data.attributes.url;
        console.log("info")
        console.log(info)
        setLink(info);
        
      });
  }, []);

  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={17}>
              <Wrapper>
                <ImageWrapper>
                  <Image
                    src={`http://localhost:1337${link}`}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </ImageWrapper>
                <HeaderForm
                  header="Закажите бесплатную консультацию"
                  button={true}
                  text="Напишите нам в WhatsApp"
                />
              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default OrderForm;
