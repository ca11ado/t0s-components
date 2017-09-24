/**
*
* LoaderRound
*
*/

import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Base from './Base';

const SmallestRound = styled(Base)`
`;

const SmallRound = styled(Base)`
  animation-delay: 1s;
`;

const BigRound = styled(Base)`
  animation-delay: 2s;
`;

export function Loader () {
  return (
    <Wrapper>
      <BigRound color={'red'}>
        <SmallRound>
          <SmallestRound color={'red'} />
        </SmallRound>
      </BigRound>
    </Wrapper>
  );
}

const DELAY = 100;
const LoaderLinesWrapper = styled.div`
  height: 100%
  width: 100%;
`;

const Line = styled.div`
  height: 100%;
  background:
    url(./line.svg) ${props => (props.shift || 0)}px 0/20px 10px;
`;

export const LoaderLines = React.createClass({
  getInitialState () {
    const startPosition = 0;
    return {
      count: startPosition
    }
  },

  componentDidMount() {
    this.tm = setInterval(() => {
      const count = this.state.count + 1;
      this.setState({ count: count });
    }, DELAY);
  },

  componentWillUnmount() {
    clearTimeout(this.tm);
  },

  render () {
    return (
      <LoaderLinesWrapper>
        <Line shift={this.state.count} />
      </LoaderLinesWrapper>
    );
  }
});