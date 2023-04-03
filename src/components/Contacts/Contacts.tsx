import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Row, Col } from "antd";
import {
  Text,
  Header,
  Subheader,
  Social,
  SocialWrapper,
  Section,
  Wrapper,
} from "../../styles/Contacts";
import { InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";
import MapSection from "../Map";

function Contacts() {
  const [header, setHeader] = useState<any>([]);
  const [adressHeader, setAdressHeader] = useState<any>([]);
  const [adresses, setAdresses] = useState<any>();
  const [telHeader, setTelHeader] = useState<any>([]);
  const [tel, setTel] = useState<any>([]);
  const [emailHeader, setEmailHeader] = useState<any>([]);
  const [email, setEmail] = useState<any>([]);
  const [socialHeader, setSocialHeader] = useState<any>([]);
  const [social, setSocial] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/block6").then((response: any) => {
      const info = response.data.data.attributes.header;
      setHeader(info);
    });
    // Adress
    axios.get("http://localhost:1337/api/block6adress").then((response) => {
      const info = response.data.data.attributes.header;
      setAdressHeader(info);
    });
    axios.get("http://localhost:1337/api/adresses").then((response: any) => {
      const info = response.data.data;
      setAdresses(info);
    });
    // Telephone
    axios.get("http://localhost:1337/api/block6-tel").then((response) => {
      const info = response.data.data.attributes.title;
      setTelHeader(info);
    });
    axios.get("http://localhost:1337/api/tels").then((response) => {
      const info = response.data.data;
      setTel(info);
    });
    // Email
    axios.get("http://localhost:1337/api/block6mail").then((response) => {
      const info = response.data.data.attributes.title;
      setEmailHeader(info);
    });
    axios.get("http://localhost:1337/api/emails").then((response) => {
      const info = response.data.data[0].attributes.mail;
      setEmail(info);
    });
    // Social
    axios.get("http://localhost:1337/api/block6-social").then((response) => {
      const info = response.data.data.attributes.title;
      setSocialHeader(info);
    });
    axios
      .get("http://localhost:1337/api/socialmedias?populate=*")
      .then((response) => {
        const info = response.data.data;
        console.log(social);
        setSocial(info);
      });
  }, []);

  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Wrapper>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={20}>
              <Section>
                <Text>
                  <Header>
                    <h1>{header}</h1>
                  </Header>
                  <Subheader>
                    <p>{adressHeader}</p>
                  </Subheader>
                  <ul>
                    {adresses ? (
                      <>
                        {adresses.map((elem: any, i: number) => (
                          <li key={i}>{elem.attributes.name}</li>
                        ))}
                      </>
                    ) : null}
                  </ul>
                  <Subheader>
                    <p>{telHeader}</p>
                  </Subheader>
                  <ul>
                    {tel.map((elem: any, i: number) => (
                      <li key={i}>
                        <a href={`tel:${elem.attributes.telephone}`}>
                          <p>{elem.attributes.telephone}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Subheader>
                    <p>{emailHeader}</p>
                  </Subheader>
                  <ul>
                    <li>
                      <p>{email}</p>
                    </li>
                  </ul>
                  <Subheader>
                    <p>{socialHeader}</p>
                  </Subheader>
                  <SocialWrapper>
                    {social.map((elem: any, i: number) => (
                      <Social>
                        <Image
                          src={`http://localhost:1337${elem.attributes.icon.data.attributes.url}`}
                          alt={"icon"}
                          width={20}
                          height={20}
                        />
                        <p>{elem.attributes.followers}</p>
                      </Social>
                    ))}
                  </SocialWrapper>
                </Text>
              </Section>
            </Col>
          </Row>
          <MapSection />
        </Wrapper>
      </Col>
    </Row>
  );
}

export default Contacts;
