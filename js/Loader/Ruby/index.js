import React from 'react';
import styled from 'styled-components';

import { animationRoundBold } from "./animation";

const RoundBold = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.size} solid black;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${(props) => animationRoundBold} 5s infinite linear;
`;

export default class R extends React.Component {
  render () {
    return <RoundBold size="50px" />;
  }
}
