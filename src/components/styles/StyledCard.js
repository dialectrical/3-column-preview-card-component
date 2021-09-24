import styled from "styled-components";

export const StyledCard = styled.section`
  width: 307px;
  height: 500px;
  border-radius: 8px;
  padding: 48px 47.5px 48px 47.5px;
  .imgContainer {
    margin: 0px 0px 35px 0.5px;
  }
  .headerContainer {
    margin: 35px 0px 25px 0.5px;
  }
  .contentContainer {
    margin: 25px 0px 83px 0px;
  }
  .buttonContainer {
    margin: 83px 0px 0x 0.5px;
  }
  .sedansButton {
    color: #e28625;
    :hover {
      border: 2px solid #f2f2f2;
      color: #f2f2f2;
      background-color: #e28625;
    }
  }
  .suvsButton {
    color: #006971;
    :hover {
      border: 2px solid #f2f2f2;
      color: #f2f2f2;
      background-color: #006971;
    }
  }
  .luxuryButton {
    color: #004140;
    :hover {
      border: 2px solid #f2f2f2;
      color: #f2f2f2;
      background-color: #004140;
    }
  }
  h2 {
    font-family: "Big Shoulders Display";
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-family: "Lexend Deca";
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    opacity: 0.75;
  }
`;
