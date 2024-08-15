import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SkillImage = styled.div`
	width: 150px;
	height: 150px;
	aspect-ratio: 1/1;
	border-radius: ${({ theme }) => theme.spacing.large};
	background-color: ${({ theme }) => theme.colors.terciary};
`;

export const SkillName = styled.span`
	margin-top: ${({ theme }) => theme.spacing.medium};
`;
