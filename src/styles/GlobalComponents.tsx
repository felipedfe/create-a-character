import styled from "styled-components";

export const ImageButton = styled.button`
  position: relative;
  padding: 1rem 0;
  background-color: #fff;
  border: solid 3px #4d4d4d;
  border-radius: 10px;

  & :hover {
    /* border-color: #ff0fc7; */
    /* background-color: #fbdcff;
    transition: background-color 0.5; */
    transition: scale 0.3s;
    scale: 1.1;
    cursor: pointer;
  }
`;
