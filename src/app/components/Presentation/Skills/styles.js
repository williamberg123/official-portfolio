import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 2;
	margin: auto;
	flex-wrap: wrap;
	gap: 20px;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const C = styled.div``;
