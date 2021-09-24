import React from "react";
import { StyledCardContainer } from "./styles/StyledCardContainer";
import { SedansCard } from "./SedansCard";
import { SuvsCard } from "./SuvsCard";
import { LuxuryCard } from "./LuxuryCard";

export const PreviewCard = () => {
  return (
    <StyledCardContainer>
      <SedansCard />
      <SuvsCard />
      <LuxuryCard />
    </StyledCardContainer>
  );
};
