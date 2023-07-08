import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { updateEyes, updateNose, updateMouth } from "../../slices/idSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import * as gs from "../../styles/GlobalComponents";

const ChooseImageSection = styled.section`
  display: flex;
  gap: 5px;
  width: 100%;
  max-height: 90vw;

  @media all and (min-width: 1024px) {
    flex-direction: column;
    width: 300px;
  }
`;

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
          <gs.ImageButton type="button" onClick={() => (dispatch(actions[attribute](1)))}>
            <Image
              alt={`${attribute}-1`}
              src={`images/${attribute}/${attribute}-1.png`}
            />
          </gs.ImageButton>
          <gs.ImageButton type="button" onClick={() => (dispatch(actions[attribute](2)))}>
            <Image
              alt={`${attribute}-2`}
              src={`images/${attribute}/${attribute}-2.png`}
            />
          </gs.ImageButton>
          <gs.ImageButton type="button" onClick={() => (dispatch(actions[attribute](3)))}>
            <Image
              alt={`${attribute}-3`}
              src={`images/${attribute}/${attribute}-3.png`}
            />
          </gs.ImageButton>
          <gs.ImageButton type="button" onClick={() => (dispatch(actions[attribute](4)))}>
            <Image
              alt={`${attribute}-4`}
              src={`images/${attribute}/${attribute}-4.png`}
            />
          </gs.ImageButton>
        </>
      )}
    </ChooseImageSection>
  );
}

export default ChooseImage;
