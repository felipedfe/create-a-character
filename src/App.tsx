import Face from "./components/Face/Face";
import ChooseAttr from "./components/ChooseAttr/ChooseAttr";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import ChooseImage from "./components/ChooseImage/ChooseImage";

// const MenuBtn = styled.button``;

function App() {
  const attribute = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );

  return (
    <main>
      <h1>Character Builder</h1>

      <Face />
      <ChooseAttr />
      <ChooseImage />
    </main>
  );
}

export default App;
