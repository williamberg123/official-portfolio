import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
`;
