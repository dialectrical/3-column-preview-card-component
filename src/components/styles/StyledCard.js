import styled from "styled-components";

export const StyledCard = styled.section`
  display: inline-block;
  width: 307px;
  height: 500px;
  padding: 1px 0 0 0;
  margin: -1px 0 0 0;
  .imgContainer {
    margin: 48px 0px 35px 48px;
  }
  .headerContainer {
    margin: 35px 0px 25px 48px;
  }
  .textContainer {
    width: 212px;
    height: 125px;
    margin: 25px 0px 83px 47.5px;
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
