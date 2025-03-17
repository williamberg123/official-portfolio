import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: skill-animation 1.5s alternate;
	animation-delay: ${({ delay }) => `${delay}s`};

	@keyframes skill-animation {
		0% {
			transform: translateY(50px);
			opacity: 0%;
		}

		50% {
			transform: translateY(-30px);
		}

		100% {
			transform: translateY(0px);
			opacity: 100%;
		}
	}
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
