import React from "react";
import Image from "next/image";
import {
  Header,
  CardWrapper,
  ImageWrapper,
  TextWrapper,
} from "../../styles/Main";
import ButtonWhatsUpBlack from "../Buttons/ButtonWhatsUpBlack";
import ButtonOrder from "../Buttons/ButtonOrder";

interface Props {
  header: string;
  paragraph1: string;
  paragraph2: string;
  src: string;
  buttonText: string;
}

function MainCard(props: Props) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={props.src}
          alt={props.header}
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        <Header>
          <h2>{props.header}</h2>
        </Header>
        <p>{props.paragraph1}</p>
        <br />
        <p>{props.paragraph2}</p>
      </TextWrapper>
      <ButtonWhatsUpBlack />
      <ButtonOrder text={props.buttonText} />
    </CardWrapper>
  );
}

export default MainCard;
