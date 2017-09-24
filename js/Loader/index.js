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

const LoaderLine = styled.div`
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

  render () {
    const that = this;
    setTimeout(function () {
      const count = that.state.count + 1;
      that.setState({ count: count });
    }, DELAY);

    return (
      <LoaderLinesWrapper>
        { this.state.content }
        <LoaderLine shift={this.state.count} />
      </LoaderLinesWrapper>
    );
  }
});