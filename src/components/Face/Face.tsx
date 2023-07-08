import Eyes from "../Eyes/Eyes";
import Nose from "../Nose/Nose";
import Mouth from "../Mouth/Mouth";
import styled from "styled-components";

const FaceSection = styled.section`
  position: relative;
  width: 100%;
  /* background-color: #d09bff; */

  @media all and (min-width: 1024px) {
    /* width: 600px; */
  }
`;

const FaceContour = styled.img`
  width: 100%;
  /* border: solid 2px pink; */
`;

function Face() {


  return (
    <FaceSection>
      <FaceContour alt="face" src="images/face-white.png" />
      <Eyes />
      <Nose />
      <Mouth />
    </FaceSection>
  );
}

export default Face;
