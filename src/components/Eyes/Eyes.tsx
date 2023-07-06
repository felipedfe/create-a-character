import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const EyesSection = styled.section`
  position: absolute;
  top: 10%;
  left: 8%;
  border: solid 2px cyan;
  height: 25%;
  width: 80%;
`;

const Image = styled.img`
  width: 100%;
`

function Eyes() {
  const selectedAttr = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );

  return (
    <>
      <EyesSection>
        <Image alt="" src=""/>
      </EyesSection>
    </>
  );
}

export default Eyes;
