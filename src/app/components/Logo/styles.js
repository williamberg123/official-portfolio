import styled from 'styled-components';

export const Span = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.spacing['2xlarge']};
	animation: entrada 1.2s;

  & .white {
    color: white;
  }

  & .margin-left {
    margin-left: ${({ theme }) => theme.spacing.medium};
  }

	@media (max-width: 700px) {
		font-size: 24px;
	}


	@keyframes entrada {
		0% {
			opacity: 0%;
			transform: translateX(-100px) scale(0.5);
		}

		100% {
			opacity: 100%;
			transform: translateX(0px) scale(1);
		}
	}
`;
