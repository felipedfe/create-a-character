import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const EyesSection = styled.section`
  position: absolute;
  top: 10%;
  left: 10%;
  height: 25%;
  width: 80%;
  /* border: solid 2px cyan; */
`;

const Image = styled.img`
  width: 100%;
`

function Eyes() {
  // const selectedAttr = useSelector(
  //   (state: RootState) => state.chooseAttr.attribute
  // );

  const imageId = useSelector((state: RootState) => state.id.eyes);


  return (
    <>
      <EyesSection>
        <Image alt="" src={`images/eyes/eyes-${imageId}.png`} />
      </EyesSection>
    </>
  );
}

export default Eyes;
