import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { select, reset } from "../../slices/chooseAttrSlice";
import { RootState } from "../../store/store";

const ChooseAttrSection = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;

  @media all and (min-width: 1024px) {
    flex-direction: column;
    width: 120px;
  }
`

interface IAttributeBtn {
  $selectedAttr: boolean,
}

const AttributeBtn = styled.button<IAttributeBtn>`
  color: ${(props) => props.$selectedAttr ? "#fff": "#000"};
  background-color: ${(props) => props.$selectedAttr ? "#000" : "#fff"};
  border: solid 2px #000;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

function ChooseAttr() {
  const dispatch = useDispatch();

  const attribute = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );

  console.log(attribute);


  return (
    <ChooseAttrSection>
      <AttributeBtn
        type="button"
        value="eyes"
        onClick={() => {
          dispatch(select("eyes"));
        }}
        $selectedAttr={attribute === "eyes"}
      >
        Eyes
      </AttributeBtn>
      <AttributeBtn
        type="button"
        value="nose"
        onClick={() => {
          dispatch(select("nose"));
        }}
        $selectedAttr={attribute === "nose"}
      >
        Nose
      </AttributeBtn>
      <AttributeBtn
        type="button"
        value="mouth"
        onClick={() => {
          dispatch(select("mouth"));
        }}
        $selectedAttr={attribute === "mouth"}
      >
        Mouth
      </AttributeBtn>
    </ChooseAttrSection>
  );
}

export default ChooseAttr;
