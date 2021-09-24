import styled from "styled-components";

export const StyledButton = styled.button`
  width: 146px;
  height: 48px;
  border-radius: 25px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;

  :hover {
    border: 2px solid #f2f2f2;
    color: #f2f2f2;
    .sedansButton {
      background-color: #e28625;
    }
    .suvsButton {
      background-color: #006971;
    }
    .luxuryButton {
      background-color: #004140;
    }
  }
`;
