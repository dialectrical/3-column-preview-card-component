import styled from "styled-components";

export const StyledButton = styled.button`
  width: 146px;
  height: 48px;
  border-radius: 25px;
  background-color: #f2f2f2;
  cursor: pointer;
  .sedanButton {
    color: #e28625;
  }
  .suvButton {
    color: #006971;
  }
  .luxuryButton {
    color: #004140;
  }
  :hover {
    border: 2px solid #f2f2f2;
    color: #f2f2f2;
    .sedanButton {
      background-color: #e28625;
    }
    .suvButton {
      background-color: #006971;
    }
    .luxuryButton {
      background-color: #004140;
    }
  }
`;
