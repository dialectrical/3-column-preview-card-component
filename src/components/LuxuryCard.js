import React from "react";
import { StyledCard } from "./styles/StyledCard";
import { StyledButton } from "./styles/StyledButton";
import icon from "../img/icon-luxury.svg";

export const LuxuryCard = () => {
  return (
    <StyledCard className="luxuryCard">
      <div className="imgContainer">
        <img src={icon} />
      </div>
      <div className="headerContainer">
        <h2>Luxury</h2>
      </div>
      <div className="textContainer">
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
      </div>
      <div className="buttonContainer">
        <StyledButton className="luxuryButton"> Learn More</StyledButton>
      </div>
    </StyledCard>
  );
};
