import styled, { css } from 'styled-components';

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

export const ProfileFigure = styled.figure`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileInformationsContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	padding: 20px;

  & .informations-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
		flex-wrap: wrap;
  }

	@media (max-width: 600px) {
		margin-top: 20px;
	}
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  margin-left: auto;

	@media (max-width: 600px) {
		margin: auto;
	}
`;

export const SocialMediaLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s;

  ${({ theme }) => css`
    background-color: ${theme.colors.primaryLight};
    margin: ${theme.spacing.large};
    padding: ${theme.spacing.small};
    background-color: ${theme.colors.primaryLight};

    &:hover {
      background-color: ${theme.colors.terciary};
    }

		@media (max-width: 600px) {
			width: 40px;
			height: 40px;

			& > svg {
				width: 14px;
				height: 14px;
			}
		}
  `}
`;

export const ActionsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing['2xlarge']};
	flex-wrap: wrap;

	button a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}

	@media (max-width: 700px) {
		justify-content: center;
	}
`;

export const ProfileCodeContainer = styled.div`
  width: 300px;
  display: flex;

	@media (max-width: 600px) {
		margin-top: 20px;
	}
`;

export const CodeImage = styled.img`
  width: 100%;
`;
