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

const DELAY = 300;
const LoaderLinesWrapper = styled.div`
  width: 200px; 
  height: 200px;
`;

const LoaderLine = styled.div`
  height: 100%;
  background:
    url(./line3.svg) ${props => (props.shift || 0)}px 0/1% 10px;
`;

export const LoaderLines = React.createClass({
  getInitialState () {
    const startPosition = 0;
    return {
      content: <LoaderLine shift={startPosition} />,
      count: startPosition
    }
  },

  componentDidMount () {
    setTimeout(() => {

    }, DELAY);
  },

  render () {
    const that = this;
    /*setTimeout(function () {
      const count = that.state.count + 1;
      that.setState({ content: <LoaderLine shift={count} />, count: count });
    }, DELAY);*/

    return (
      <LoaderLinesWrapper>
        { this.state.content }
      </LoaderLinesWrapper>
    );
  }
});