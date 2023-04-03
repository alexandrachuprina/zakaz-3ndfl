import React from "react";
import Image from "next/image";
import {
  Header,
  CardWrapper,
  ImageWrapper,
  TextWrapper,
  ButtonsWrapper,
  Price,
} from "../../styles/Main";
import ButtonWhatsUpBlack from "../Buttons/ButtonWhatsUpBlack";
import ButtonOrder from "../Buttons/ButtonOrder";

interface Props {
  header: string;
  paragraph: string;
  src: string;
  buttonText: string;
  price: boolean;
}

function MainCard(props: Props) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={props.src} alt={props.header} width={200} height={200} />
      </ImageWrapper>
      <TextWrapper>
        <Header>
          <h2>{props.header}</h2>
        </Header>
        <p>{props.paragraph}</p>
        <br />
        {props.price ? (
          <Price>
            <p>300 ₽</p>
          </Price>
        ) : null}
      </TextWrapper>
      <ButtonsWrapper>
        <ButtonOrder text={props.buttonText} />
        <ButtonWhatsUpBlack />
      </ButtonsWrapper>
    </CardWrapper>
  );
}

export default MainCard;
