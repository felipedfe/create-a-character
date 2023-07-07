import Eyes from "../Eyes/Eyes";
import Nose from "../Nose/Nose";
import Mouth from "../Mouth/Mouth";
import styled from "styled-components";

const FaceSection = styled.section`
  position: relative;
  /* width: 300px; */
  /* height: ; */
  width: 100%;
`;

const FaceContour = styled.img`
  width: 100%;
  border: solid 2px pink;
`;

function Face() {


  return (
    <FaceSection>
      <FaceContour alt="face" src="images/face.png" />
      <Eyes />
      <Nose />
      <Mouth />
    </FaceSection>
  );
}

export default Face;
