import React from 'react';
import styled from 'styled-components';

import animation from "./animation";

const Sun = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.size} solid black;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${(props) => animation} 5s infinite linear;
`;

export default React.createClass({
  render () {
    return <Sun size="50px" />;
  }
});
