import React from 'react';
import styled from 'styled-components';
import animation from "./animation";

const Wrapper = styled.div`
  display: flex;
`;

const Ball = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.size} solid black;
  border-radius: 50%;
  border-color: ${({ color }) => color};
  box-sizing: border-box;
  margin: 20% 10% 0 10%;
  animation: ${(props) => animation} ${props => props.speed} ${props => props.delay} infinite;
`;

export default class B extends React.Component {
  render () {
    const { speed = '1s', size = '10px', theme = '#000' } = this.props;
    const [, speedInNumbers = '1000', timeString = 'ms'] = speed.match(/(\d*)(\w*)/);

    const s = `${speedInNumbers}${timeString}`;
    const d1 = `${speedInNumbers * .2}${timeString}`;
    const d2 = `${speedInNumbers * .4}${timeString}`;

    return (
      <Wrapper>
        <Ball speed={s} size={size} theme={theme} />
        <Ball speed={s} size={size} delay={d1} />
        <Ball speed={s} size={size} delay={d2} theme={theme} />
      </Wrapper>
    );
  }
}
