import { keyframes } from 'styled-components';

export default function (props) {
  return keyframes`
    0% {
    }
    25% {
      border-right: ${props.size} solid transparent;
    }
    50% {
      border-bottom: ${props.size} solid red;
    }
    100% {
      border-top: ${props.size} solid transparent;
    }
  `;
}
