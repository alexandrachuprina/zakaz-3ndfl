import styled from "styled-components";
import background from "src/assets/Header/background.jpg";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";
import Image from "next/image";

export const HeadWrapper = styled.div`
  background-color: ${colors.darkGray};
  /* background-image: ${background};
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content; */

  @media (min-width: ${queries.lg}) {
    height: 100vh;
  }
`;
export const Logo = styled.div`
  padding: 0 0 2vh 0;
`;
export const Navbar = styled.div`
  padding: 2vh 0 2vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2,
  p {
    color: white;
  }

  @media (min-width: ${queries.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Phone = styled.div`
  padding: 0 0 2vh 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    padding: 0 0 0 2vh;
    margin: 0;
  }
`;
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 77px 0 0 0; */

  @media (min-width: ${queries.lg}) {
    margin: 77px 0 0 0;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
  }

  @media (min-width: ${queries.xl}) {
    justify-content: space-between;
    align-self: center;
    margin: 190px 0 0 0;
  }
`;

export const Text = styled.div`
  h1,
  h2 {
    color: white;
  }

  @media (min-width: ${queries.xs}) {
    margin-bottom: 16px;
    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      width: 244px;
      padding-bottom: 16px;
    }
    h2 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      width: 288px;
      margin-bottom: 16px;
    }
  }

  @media (min-width: ${queries.sm}) {
    h1,
    h2 {
      width: 502px;
    }
  }

  @media (min-width: ${queries.lg}) {
    h1 {
      padding-bottom: 60px;
    }
    h2 {
      padding-bottom: 27px;
    }
  }
`;
export const ButtonWrapper = styled.div``;

