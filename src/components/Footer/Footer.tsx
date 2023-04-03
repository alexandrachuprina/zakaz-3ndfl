import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { Section, Logo, Line, Credits, Services } from "@/src/styles/Footer";
import Image from "next/image";

function Footer() {
  const [text, setText] = useState<any>([]);
  const [link, setLink] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/footer-links?populate=*")
      .then((response: any) => {
        const info = response.data.data;
        setText(info);
      });

    axios
      .get("http://localhost:1337/api/footer?populate=*")
      .then((response: any) => {
        const info = response.data.data.attributes.logo.data.attributes.url;
        setLink(info);
      });
  }, []);

  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={17}>
              <Logo>
                {link ? (
                  <Image
                    src={`http://localhost:1337${link}`}
                    alt="Logo"
                    width={`180`}
                    height={60}
                  />
                ) : null}
              </Logo>
              <Services>
                {text.map((elem: any, i: number) => (
                  <p>{elem.attributes.name}</p>
                ))}
              </Services>
              <Credits>
                <Line />
                <p>© 2022, Центр Отчетности </p>
              </Credits>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default Footer;
