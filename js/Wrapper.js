const React = require('react');
const styled = require('styled-components').default;

const Smile = require('./Smile');
import { Loader, LoaderLines, LoaderRoundBold } from './Loader';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid grey;
  margin-bottom: 20px;
`;

const WrapperFixedHeight = styled(Wrapper)`
  height: 100px;
`;

const App = () => (
  <div>
    <Wrapper>
      <Smile bold='3' baseSize='20'/>
    </Wrapper>
    <Wrapper>
      <Loader/>
    </Wrapper>
    <WrapperFixedHeight>
      <LoaderLines/>
    </WrapperFixedHeight>
    <WrapperFixedHeight>
      <LoaderRoundBold/>
    </WrapperFixedHeight>
  </div>
);

module.exports = App;

