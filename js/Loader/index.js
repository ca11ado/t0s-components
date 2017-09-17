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

const LoaderLinesWrapper = styled.div`
  width: 200px; 
  height: 200px;
`;

const LoaderLine1 = styled.div`
  height: 100%;
  background: url(./line.svg);
  background-size: 10px 10px;
`;

const LoaderLine2 = styled.div`
  height: 100%;
  background: url(./line.svg);
  background-size: 10px 10px;
  background-position: 5px 0;
`;

export const LoaderLines = React.createClass({
  getInitialState () {
    return {
      content: <LoaderLine1 />,
      count: 1
    }
  },

  componentDidMount () {
    setTimeout(() => {

    }, 3000);
  },

  render () {
    const that = this;
    setTimeout(function () {
      that.state.count === 1
        ? that.setState({ content: <LoaderLine2 />, count: 2 })
        : that.setState({ content: <LoaderLine1 />, count: 1 });
    }, 2000);

    return (
      <LoaderLinesWrapper>
        { this.state.content }
      </LoaderLinesWrapper>
    );
  }
});