import styled from "styled-components";

export const StyledCard = styled.section`
  display: inline-block;
  width: 21.32vw;
  height: 62.5vh;
  padding: 1px 0 0 0;
  margin: -1px 0 0 0;
  .imgContainer {
    margin: 6vh 0px 4.38vh 6vh;
  }
  .headerContainer {
    margin: 4.38vh 0px 3.13vh 3.33vw;
  }
  .textContainer {
    width: 14.72vw;
    height: 15.63vh;
    margin: 3.13vh 0px 10.38vh 3.3vw;
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
  img {
    display: block;
    margin: 0;
  }
  h2 {
    font-family: "Big Shoulders Display";
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-family: "Lexend Deca";
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    opacity: 0.75;
  }
`;
