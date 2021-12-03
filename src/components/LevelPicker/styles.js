import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

const LevelPickerContainer = styled.div`
  display: flex;
`;

const LevelCard = styled.div`
  margin: 10px;
  border-radius: 3px;
  border: 2px solid black;
  width: 300px;
  height: 200px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgb(185 39 177 / 88%);
  }
`;

const ImgPreview = styled.img`
  height: 100%;
  width: 100%;
`;



export { LevelPickerContainer, LevelCard, ImgPreview, Outer };