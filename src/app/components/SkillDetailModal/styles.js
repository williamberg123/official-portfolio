import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 2.5%;
	left: 2.5%;
	width: 95%;
	height: 95%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 10;
	border-radius: 20px;

	& svg {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 50px;
		height: 50px;
		margin-left: auto;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}
`;
