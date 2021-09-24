import React from "react";
import { StyledCard } from "./styles/StyledCard";
import { StyledButton } from "./styles/StyledButton";
import icon from "../img/icon-sedans.svg";

export const SedansCard = () => {
  return (
    <StyledCard className="sedansCard">
      <div className="imgContainer">
        <img src={icon} />
      </div>
      <div className="headerContainer">
        <h2>Sedans</h2>
      </div>
      <div className="textContainer">
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
      </div>
      <div className="buttonContainer">
        <StyledButton className="sedansButton"> Learn More</StyledButton>
      </div>
    </StyledCard>
  );
};
