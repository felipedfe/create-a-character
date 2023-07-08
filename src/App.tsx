import Face from "./components/Face/Face";
import ChooseAttr from "./components/ChooseAttr/ChooseAttr";
import ChooseImage from "./components/ChooseImage/ChooseImage";
import styled from "styled-components";
import underLine from "./assets/underline3.png";

const Main = styled.main`
  width: 90%;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
  /* background-color: #ffdefe; */
  /* opacity: 0.2; */
`

const TitleBox = styled.div`
  display: flex;
  /* justify-content: center;
  padding: 1.5rem 0; */
  /* justify-content: center; */
  justify-content: center;
  padding-bottom: 1.5rem;
`

const TitleBackGround = styled.div`
  position: relative;
  background-color: #fff;
`

const Title = styled.h1`
  padding: 1rem;
  text-align: center;
`

const Underline = styled.img`
  position: absolute;
  bottom: 3%;
  left: 0;
  width: 100%;
`

const CharacterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* height: 100vh; */
  /* background-color: #ffc88d; */
  /* max-width: 450px; */

  @media all and (min-width: 480px) {
    width: 420px;
    margin: auto;
  }
  
  @media all and (min-width: 1024px) {
    width: 850px;
    flex-direction: row;
    align-items: center;
    height: auto;
  }
`

function App() {
  return (
    <Main>
      <TitleBox>
        <TitleBackGround>
          <Title>Create a Character</Title>
          <Underline src={underLine} />
        </TitleBackGround>
      </TitleBox>
      <CharacterSection>
        <Face />
        <ChooseAttr />
        <ChooseImage />
      </CharacterSection>
    </Main>
  );
}

export default App;
