import React from "react";
import coverImage from "../assets/images/illustration.png";

import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "../components/styles/Container.style";
import { H1, Tag, P, Image } from "./styles/Elements.style";
import Button from "./Button";
import { StyledTitle } from "./styles/custom.style";

function Card({ themeHander }) {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle text="React Styled Components" color="#fff" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button onClick={themeHander} text="Change Theme" link="#" />
          <Button text="Github repo" link="#" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={coverImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}

export default Card;
