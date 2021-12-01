import styled from 'styled-components';

const OuterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

const GameImage = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  cursor: default;
`;

const Lens = styled.div`
  background-color: rgba(255, 255, 224, 0.4);
  border: 1px solid black;
  position: absolute;
  width: 30px;
  height: 30px;
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


export { OuterContent, GameImage, Lens, LensDD, DDItem };