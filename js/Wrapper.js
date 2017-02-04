const React = require('react');
const styled = require('styled-components').default;

const Smile = require('./Smile');

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <Smile bold='3' baseSize='20' />
  </Wrapper>
);

module.exports = App;

