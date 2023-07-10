import Face from "./components/Face/Face";
import ChooseAttr from "./components/ChooseAttr/ChooseAttr";
import ChooseImage from "./components/ChooseImage/ChooseImage";
import styled from "styled-components";
import underLine from "./assets/underline4.png";
import logo from "./assets/logo.png";

const Main = styled.main`
  width: 90%;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const TitleBackGround = styled.div`
  position: relative;
`

// const Title = styled.h1`
//   font-size: 4rem;
//   font-family: 'Rampart One', cursive;
//   padding: 1rem 0;
//   text-align: center;
// `

const Logo = styled.img`
  padding: 1rem 0;
  width: 100%;
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

  @media all and (min-width: 450px) {
    width: 380px;
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
        <Logo src={logo}/>
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
