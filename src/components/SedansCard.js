import React from "react";
import { StyledCard } from "./styles/StyledCard";
import { StyledButton } from "./styles/StyledButton";
import icon from "../img/icon-sedans.svg";

export const SedansCard = () => {
  return (
    <StyledCard className="sedansCard">
      <img src={icon} />
      <h2>Sedans</h2>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <StyledButton className="sedansButton"> Learn More</StyledButton>
    </StyledCard>
  );
};
