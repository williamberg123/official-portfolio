import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& svg {
		width: 150px;
		height: 150px;
	}

	& > span {
		font-size: ${({ theme }) => theme.spacing['2xlarge']};

		@media (max-width: 600px) {
			font-size: ${({ theme }) => theme.spacing.large};
		}
	}

	& > a {
		text-decoration: none;
		border-radius: 10px;
		padding: 10px 20px;

		${({ theme }) => css`
			color: ${theme.colors.secondary};
			border: 2px solid ${theme.colors.secondary};
			margin-top: ${theme.spacing.large};
		`}
	}

	& .header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
		font-size: ${({ theme }) => theme.spacing.large};
	}
`;
