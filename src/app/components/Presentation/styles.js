import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
  width: 100%;
  min-height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
  position: relative;
	opacity: 100%;

	@media (max-width: 1000px) {
		background-position: top;
		background-size: contain;
	}
`;

export const BackgroundFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, #11102B);
	// background: linear-gradient(to bottom, red, blue 60%);
	opacity: 90%;
`;
