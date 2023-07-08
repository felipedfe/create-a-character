import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const MouthSection = styled.section`
  position: absolute;
  top: 60%;
  left: 10%;
  height: 25%;
  width: 80%;
  /* border: solid 2px gray; */
`

const Image = styled.img`
  width: 100%;
`

function Mouth() {
  const imageId = useSelector((state: RootState) => state.id.mouth);

  return (
    <MouthSection>
      <Image alt="" src={`images/mouth/mouth-${imageId}.png`} />
    </MouthSection>
  )
}

export default Mouth;
