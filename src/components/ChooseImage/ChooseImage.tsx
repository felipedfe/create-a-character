import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { updateEyes, updateNose, updateMouth } from "../../slices/idSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const ChooseImageSection = styled.section`
  display: flex;
  width: 100%;
`;

const Button = styled.button``;

const Image = styled.img`
  width: 100%;
`;

function ChooseImage() {
  const dispatch = useDispatch();

  const attribute = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );

  const actions: Record<string, ActionCreatorWithPayload<number, string>> = {
    eyes: updateEyes,
    nose: updateNose,
    mouth: updateMouth
  };

  return (
    <ChooseImageSection>
      {attribute && (
        <>
          <Button type="button" onClick={() => (dispatch(actions[attribute](1)))}>
            <Image
              alt={`${attribute}-1`}
              src={`images/${attribute}/${attribute}-1.png`}
            />
          </Button>
          <Button type="button" onClick={() => (dispatch(actions[attribute](2)))}>
            <Image
              alt={`${attribute}-2`}
              src={`images/${attribute}/${attribute}-2.png`}
            />
          </Button>
          <Button type="button" onClick={() => (dispatch(actions[attribute](3)))}>
            <Image
              alt={`${attribute}-3`}
              src={`images/${attribute}/${attribute}-3.png`}
            />
          </Button>
          <Button type="button" onClick={() => (dispatch(actions[attribute](4)))}>
            <Image
              alt={`${attribute}-4`}
              src={`images/${attribute}/${attribute}-4.png`}
            />
          </Button>
        </>
      )}
    </ChooseImageSection>
  );
}

export default ChooseImage;
