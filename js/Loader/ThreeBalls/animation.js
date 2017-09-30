import { keyframes } from 'styled-components';

function animation ({ theme }) {
  const defaultColor = '#000';
  const color = theme || defaultColor;

  return keyframes`
    0% { border-color: ${defaultColor}; }
    50% { transform: scale(1.5); border-color: ${color}; }
    100% { transform: scale(1); border-color: ${defaultColor};
  `;
}

function animation2 ({ theme }) {
  const defaultColor = '#000';
  const color = theme || defaultColor;

  return keyframes`
    0% { border-color: ${defaultColor}; }
    18% { transform: scale(1.5); border-color: ${color}; }
    34% { transform: scale(1); border-color: ${defaultColor }
    50% {}
    66% {}
    82% {}
    100% {}
  `;
}

export default animation2;
