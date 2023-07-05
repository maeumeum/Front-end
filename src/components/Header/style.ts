import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.div`
	top: 0;
	z-index: 200;
	position: sticky;
	box-sizing: border-box;
	height: 8rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 1px solid rgb(238, 238, 238);

	@media (max-width: 1024px) {
		height: 10rem;
		z-index: 1;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 40rem;
	min-width: 112rem;

	@media (max-width: 1024px) {
		margin: 0 2rem;
		min-width: 33rem;
	}
`;

export const HamburgerBtnContainer = styled.div`
	display: none;

	@media (max-width: 1024px) {
		display: contents;
		width: 3rem;
		cursor: pointer;

		img {
			width: 3rem;
		}
	}
`;

export const LogoContainer = styled.div`
	width: 8rem;
	height: 8rem;
	cursor: pointer;

	@media (max-width: 1024px) {
		width: 7rem;
		height: 5rem;
	}
`;

export const MainLogo = styled.img`
	width: 8rem;
	height: 8rem;

	@media (max-width: 1024px) {
		width: 7rem;
		height: 5rem;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	height: 8rem;
	min-width: 40rem;

	@media (max-width: 1024px) {
		display: none;
	}
`;

export const MobileNavContainer = styled.div`
	display: none;

	@media (max-width: 1024px) {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}
`;

export const NavCategory = styled(NavLink)`
	margin: 0rem 2.5rem;
	align-self: center;
	color: ${(props) => {
		if (props.className === 'community') {
			return 'var(--button--color)';
		} else if (props.className === 'review') {
			return 'var(--button--color)';
		} else if (props.className === 'volunteers') {
			return 'var(--button--color)';
		} else if (props.className === 'main') {
			return 'var(--button--color)';
		} else {
			return '#444444';
		}
	}};
	font-weight: normal;
	font-size: 1.5rem;
	text-decoration: none;

	@media (max-width: 1024px) {
		font-size: 1.8rem;
	}
`;

export const UtilContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const LoginButton = styled.button`
	margin: 0 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 7.5rem;
	aspect-ratio: 2;
	border-radius: 1.7rem;
	border: 1px solid rgb(204, 204, 204);
	background-color: #ffffff;
	box-sizing: border-box;
	font-size: 1.2rem;
	text-decoration: none;
	cursor: pointer;

	@media (max-width: 1024px) {
		display: none;
	}
`;

export const SearchButton = styled.div`
	margin-right: 1rem;
	width: auto;
	height: auto;
	cursor: pointer;
`;

export const SearchIcon = styled.img`
	width: auto;
	height: auto;
`;
