import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  small {
    font-size: 16pt;
  }
`;

export const Section = styled.section`
  padding: 20px;
`;
