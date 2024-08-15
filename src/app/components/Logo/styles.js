import styled from 'styled-components';

export const Span = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.spacing['2xlarge']};

  & .white {
    color: white;
  }

  & .margin-left {
    margin-left: ${({ theme }) => theme.spacing.medium};
  }

	@media (max-width: 700px) {
		font-size: 24px;
	}
`;
