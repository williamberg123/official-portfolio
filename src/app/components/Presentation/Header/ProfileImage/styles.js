import styled from 'styled-components';

export const Container = styled.figure`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
	animation: entrada 1.2s;

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

export const StyledProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
	user-select: none;
	pointer-events: none;
`;
