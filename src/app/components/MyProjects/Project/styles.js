import styled from 'styled-components';

export const Container = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
`;

export const ProjectImage = styled.div`
	width: 300px;
	height: 250px;
	aspect-ratio: 6/5;
	border-radius: 50px 10px 50px 10px;
	background-color: ${({ theme }) => theme.colors.terciary};

	@media (max-width: 600px) {
		width: 200px;
		height: 133px;
	}
`;

export const ProjectName = styled.span`
	margin-top: ${({ theme }) => theme.spacing.medium};
`;
