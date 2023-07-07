import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const NoseSection = styled.section`
  position: absolute;
  top: 35%;
  left: 10%;
  height: 25%;
  width: 80%;
  /* border: solid 2px red; */
`

const Image = styled.img`
  width: 100%;
`

function Nose() {
  const imageId = useSelector((state: RootState) => state.id.nose);
  return (
    <>
      <NoseSection>
        <Image alt="" src={`images/nose/nose-${imageId}.png`} />
      </NoseSection>
    </>
  )
}

export default Nose;
