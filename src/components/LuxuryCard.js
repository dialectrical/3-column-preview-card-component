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
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
      </div>
      <div className="buttonContainer">
        <StyledButton className="luxuryButton"> Learn More</StyledButton>
      </div>
    </StyledCard>
  );
};
