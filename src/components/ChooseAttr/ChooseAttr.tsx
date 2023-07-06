import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { select, reset } from "../../slices/chooseAttrSlice";
import { RootState } from "../../store/store";

const AttributeBtn = styled.button``;

function ChooseAttr() {
  const attribute = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );
  console.log(attribute);

  const dispatch = useDispatch();

  return (
    <section>
      <AttributeBtn
        type="button"
        value="eyes"
        onClick={() => {
          dispatch(select("eyes"));
        }}
      >
        Eyes
      </AttributeBtn>
      <AttributeBtn
        type="button"
        value="nose"
        onClick={() => {
          dispatch(select("nose"));
        }}
      >
        Nose
      </AttributeBtn>
      <AttributeBtn
        type="button"
        value="mouth"
        onClick={() => {
          dispatch(select("mouth"));
        }}
      >
        Mouth
      </AttributeBtn>
    </section>
  );
}

export default ChooseAttr;
