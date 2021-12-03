import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const GameImage = styled.div`
  border: 1px solid black;
  cursor: default;
  max-width: 1100px;
  max-height: 500px;
  overflow: auto;
`;

const Lens = styled.div`
  background-color: rgba(255, 255, 224, 0.4);
  border: 1px solid black;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: ${props => props.top ? props.top + 'px' : null};
  left: ${props => props.left ? props.left + 'px' : null};
`;

const LensDD = styled.div`
  position: absolute;
  border: 1px solid black;
  cursor: pointer;
  background-color: rgb(231, 231, 231);
  top: ${props => props.top ? props.top + 'px' : null};
  left: ${props => props.left ? props.left + 'px' : null};
`;

const DDItem = styled.div`
  outline: 1px solid black;
  padding: 2px;
  &:hover {
    background-color: lightblue;
  }
`;

const Marker = styled.div`
  background-color: rgba(111, 255, 55, 0.4);
  border: 1px solid black;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: ${props => props.top ? props.top + 'px' : null};
  left: ${props => props.left ? props.left + 'px' : null};
`;


export { GameImage, Lens, LensDD, DDItem, FlexContainer, Marker };