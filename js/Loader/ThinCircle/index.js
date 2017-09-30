import React from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper';
import Base from './Base';

const SmallestRound = styled(Base)`
`;

const SmallRound = styled(Base)`
  animation-delay: 1s;
`;

const BigRound = styled(Base)`
  animation-delay: 2s;
`;

export default function ThinCircle () {
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
