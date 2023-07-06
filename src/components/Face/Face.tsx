import Eyes from "../Eyes/Eyes";
import Nose from "../Nose/Nose";
import Mouth from "../Mouth/Mouth";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FaceSection = styled.section`
  position: relative;
  /* background-image: url("images/face.png"); */
  /* height: 500px; */
  width: 550px;
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
