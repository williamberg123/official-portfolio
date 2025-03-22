import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
	flex-wrap: wrap;
  margin: ${({ theme }) => theme.spacing['2xlarge']} 20px 20px;
	padding: 20px;
	gap: 20px;
  z-index: 2;
`;

export const ProfileCodeContainer = styled.div`
  width: 300px;
  display: flex;

	@media (max-width: 600px) {
		margin-top: 20px;
	}

	animation: entradaProfileCodeContainer 1.5s;

	@keyframes entradaProfileCodeContainer {
		0% {
			opacity: 0%;
			transform: scale(0.5);
		}

		100% {
			opacity: 100%;
			transform: scale(1);
		}
	}
`;

export const CodeImage = styled.img`
  width: 100%;
`;
