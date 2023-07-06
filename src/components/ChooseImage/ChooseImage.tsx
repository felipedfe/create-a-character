import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ChooseImageSection = styled.section``;

const Button = styled.button``;

const Image = styled.img``;

function ChooseImage() {
  const attribute = useSelector(
    (state: RootState) => state.chooseAttr.attribute
  );

  return (
    <ChooseImageSection>
      {attribute && (
        <>
          <Button>
            <Image
              alt={`${attribute}-1`}
              src={`images/${attribute}/${attribute}-1.png`}
            />
          </Button>
          <Button>
            <Image
              alt={`${attribute}-2`}
              src={`images/${attribute}/${attribute}-2.png`}
            />
          </Button>
          <Button>
            <Image
              alt={`${attribute}-3`}
              src={`images/${attribute}/${attribute}-3.png`}
            />
          </Button>
          <Button>
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
