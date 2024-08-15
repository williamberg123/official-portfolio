import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
    padding: 0;
    box-sizing: border-box;
	}

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-family: 'Lalezar';
  }
`;

export const theme = {
  colors: {
    primary: '#040314',
    primaryLight: '#141330',
    secondary: '#28C28A',
    terciary: '#3F5459',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    '2xlarge': '32px',
  },
};
