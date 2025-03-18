import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 20px;
	left: calc(50% - 165px);
	z-index: 10;

	@media (max-width: 900px) {
		width: 90%;
		padding: 10px;
		left: 5%;
		bottom: 10px;
		border-radius: 50px;
		background-color: ${({ theme }) => theme.colors.primary};
		border: 2px solid ${({ theme }) => theme.colors.primaryLight};
	}
`;

export const Ul = styled.ul`
	width: 330px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	padding: 0;
`;

export const Li = styled.li`

`;

export const NavLink = styled(Link)`
	width: 75px;
	height: 75px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;

	& > svg {
		width: 20px;
		height: 20px;
	}

	${({ theme }) => css`
		border: 3px solid ${theme.colors.secondary};
		background-color: ${theme.colors.primary};
		color: ${theme.colors.secondary};

		&:hover {
			background-color: ${theme.colors.secondary};
			color: white;
		}
	`}

	@media (max-width: 900px) {
		width: 60px;
		height: 60px;
	}
`;
