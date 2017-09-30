import React from 'react';
import styled from 'styled-components';

import Smile from './Smile';
import ThinCircleLoader from './Loader/ThinCircle';
import LinesLoader from './Loader/Lines';
import RubyLoader from './Loader/Ruby';
import ThreeBalls from './Loader/ThreeBalls';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid grey;
  margin-bottom: 20px;
  overflow: hidden;
`;

const WrapperFixedHeight = styled(Wrapper)`
  height: 100px;
`;

export default function () {
  return (
    <div>
      <Wrapper>
        <Smile bold='3' baseSize='20'/>
      </Wrapper>
      <Wrapper>
        <ThinCircleLoader/>
      </Wrapper>
      <WrapperFixedHeight>
        <LinesLoader/>
      </WrapperFixedHeight>
      <WrapperFixedHeight>
        <RubyLoader/>
      </WrapperFixedHeight>
      <WrapperFixedHeight>
        <ThreeBalls size="10px" speed="3s" theme="#990000" />
      </WrapperFixedHeight>
    </div>
  );
}

