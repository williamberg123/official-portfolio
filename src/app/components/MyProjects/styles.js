import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	${({ theme }) => css`
		background: linear-gradient(to bottom, #11102B, ${theme.colors.primary});
	`}
`;

export const Title = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
	padding: 20px;
`;

export const ProjectsContainer = styled.div`
	max-width: 1400px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: auto;
	gap: 20px;
	padding: 20px;
`;
