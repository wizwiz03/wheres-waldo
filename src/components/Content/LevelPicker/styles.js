import styled from 'styled-components';

const LevelPickerContainer = styled.div`
  display: flex;
`;

const LevelCard = styled.div`
  margin: 10px;
  border-radius: 3px;
  border: 2px solid black;
  width: 300px;
  height: 200px;
  display: flex;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgb(185 39 177 / 88%);
  }
`;


export { LevelPickerContainer, LevelCard };