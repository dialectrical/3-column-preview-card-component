import React from "react";
import { StyledCard } from "./styles/StyledCard";
import { StyledButton } from "./styles/StyledButton";
import icon from "../img/icon-suvs.svg";

export const SuvsCard = () => {
  return (
    <StyledCard className="suvsCard">
      <div className="imgContainer">
        <img src={icon} />
      </div>
      <div className="headerContainer">
        <h2>SUVs</h2>
      </div>
      <div className="textContainer">
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
      </div>
      <div className="buttonContainer">
        <StyledButton className="suvsButton"> Learn More</StyledButton>
      </div>
    </StyledCard>
  );
};
