import styled, { keyframes } from 'styled-components';

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


/*********************************************************************/

const animatetop = keyframes`
  from {
    top: -300px; 
    opacity: 0;
  }

  to {
    top: 0; 
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation: ${animatetop} 0.4s;
  //animation-name: animatetop;
  //animation-duration: 0.4s;
`;

const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`;

const ModalBody = styled.div`
  padding: 2px 16px;
`;

const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`;


export { GameImage, Lens, LensDD, DDItem, FlexContainer, Marker, ModalContainer, ModalContent, ModalBody, ModalHeader, ModalFooter };