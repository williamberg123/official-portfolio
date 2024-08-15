import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  width: 270px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'Lalezar';
  color: white;
  cursor: pointer;

  ${({ theme }) => css`
    font-size: ${theme.spacing.large};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.spacing.medium};
    border: 3px solid ${theme.colors.secondary};
    margin: ${theme.spacing.medium};

    & svg {
      margin-left: ${theme.spacing.medium};
      width: 20px;
      height: 20px;
    }
  `}
`;
