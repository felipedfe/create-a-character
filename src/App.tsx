import Face from "./components/Face/Face";
import ChooseAttr from "./components/ChooseAttr/ChooseAttr";
import ChooseImage from "./components/ChooseImage/ChooseImage";
import styled from "styled-components";

const CharacterSection = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* flex-wrap: wrap; */
`

function App() {
  return (
    <main>
      <h1>Create a Character</h1>
      <CharacterSection>
        <Face />
        <ChooseAttr />
        <ChooseImage />
      </CharacterSection>
    </main>
  );
}

export default App;
