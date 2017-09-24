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
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgNDAgMTAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIiA+PHJlY3QgaWQ9InN2Z0VkaXRvckJhY2tncm91bmQiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogbm9uZTsiLz48cmVjdCB4PSIxNS4wMzMzIiB5PSIzLjc1ODMzIiBpZD0iZTJfcmVjdGFuZ2xlIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAxcHg7IHN0cm9rZTogbm9uZTsgZmlsbDogbm9uZTsiIHdpZHRoPSI5LjkyNSIgaGVpZ2h0PSIyLjQiIC8+PHJlY3QgeD0iMTUuNDY2NjY2NjY2NjY2NjY3IiB5PSI0LjUiIGlkPSJlM19yZWN0YW5nbGUiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDFweDsgc3Ryb2tlOiBub25lOyIgd2lkdGg9IjguOTkxNjY2NjY2NjY2NjY1IiBoZWlnaHQ9IjAuNzU4MzMzMzMzMzMzMzMyNyIvPjxyZWN0IHg9IjE3LjM3NTUiIHk9IjQuOTA4MzMiIGlkPSJlNF9yZWN0YW5nbGUiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDFweDsiIHdpZHRoPSI1LjMzMzQiIGhlaWdodD0iMS4xMDMzM2UtMDUiIHN0cm9rZT0iYmxhY2siIHJ5PSIwIiByeD0iMCIgLz48L3N2Zz4=);
  background-position: ${props => (props.shift || 0)}px 0;
  background-size: 20px 10px;
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