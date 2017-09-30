import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.baseSize * 16}px;
  display: flex;
`;

const Arm = styled.div`
  width: ${props => props.baseSize}px;
  height: ${props => props.baseSize * 3}px;
  border-top: ${props => props.bold}px solid black;
`;

const ArmLeft = styled(Arm)`
`;

const ArmRight = styled(Arm)`
  margin-left: ${props => props.baseSize / 5}px;
`;

const Hand = styled.div`
  width: ${props => props.baseSize}px;
  height: ${props => props.baseSize* 3}px;
`;

const HandLeft = styled(Hand)`
  border-right: ${props => props.bold}px solid black;
  transform: rotate(-45deg);
  margin-top: ${props => props.baseSize / 5}px;
  margin-right: ${props => props.baseSize}px;
  margin-left: ${props => props.baseSize / 2}px;
`;

const HandRight = styled(Hand)`
  border-left: ${props => props.bold}px solid black;
  transform: rotate(45deg);
  margin-top: ${props => props.baseSize / 5}px;
  margin-right: ${props => props.baseSize / 5}px;
  margin-left: -${props => props.baseSize / 5}px;
`;

const Cheek = styled.div`
  width: ${props => props.baseSize}px;
  height: ${props => props.baseSize* 3}px;
  border-radius: 50%;
`;

const CheekLeft = styled(Cheek)`
  border-left: ${props => props.bold}px solid black;
`;

const CheekRight = styled(Cheek)`
  position: relative;
  border-right: ${props => props.bold}px solid black;
  left: -${props => props.baseSize * 1.5}px;
`;

const Shoulder = styled.div`
  width: ${props => props.baseSize * 2}px;
  height: ${props => props.baseSize * 3}px;
  border-bottom: ${props => props.bold}px solid black;
`;

const ShoulderRight = styled(Shoulder)`
  position: relative;
  left: -${props => props.baseSize * 1.5}px;
`;

const Eye = styled.div`
  width: ${props => props.baseSize / 2}px;
  height: ${props => props.baseSize}px;
  border-left: ${props => props.bold}px solid black;
  transform: rotate(-10deg);
`;

const Mouth = styled.div`
  position: relative;
  width: ${props => props.baseSize * 2}px;
  height: ${props => props.baseSize * 2}px;
  border-bottom: ${props => props.bold}px solid black;
  border-radius: 50%;
  left: -${props => props.baseSize * 1.5}px;
  transform: rotate(-30deg);
`;

export default function (props) {
  const p = {
    baseSize: props.baseSize || 10,
    bold: props.bold || 1
  };

  return (
    <Wrapper { ...p }>
      <ArmLeft { ...p } />
      <HandLeft { ...p } />
      <Shoulder { ...p } />
      <CheekLeft { ...p } />
      <Eye { ...p } />
      <Eye { ...p } />
      <Mouth { ...p } />
      <CheekRight { ...p } />
      <ShoulderRight { ...p } />
      <HandRight { ...p } />
      <ArmRight { ...p } />
    </Wrapper>
  );
};
