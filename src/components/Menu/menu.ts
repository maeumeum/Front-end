import styled from 'styled-components';

export const MenuContainer = styled.div`
	display: flex;
	width: 1.7rem;
`;

export const MenuTitle = styled.p`
	color: var(--button--color);
	border-bottom: 1px solid #eeeeee;
	font-size: 2.2rem;
	font-weight: bold;
	padding: 1rem;
	cursor: pointer;
`;

export const Menus = styled.div`
	color: #000000;
	a {
		text-decoration: none;
		color: inherit;
		&:visited {
			text-decoration: none;
			color: #000000;
		}
	}
	p {
		cursor: pointer;
		font-size: 1.6rem;
		&:hover {
			color: var(--button--color);
		}
	}
`;

//mobile

export const MenuMobileOl = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const MenuMobileList = styled.li`
	width: 25%;
	height: 5.3rem;
	display: flex;
	p {
		padding-left: 3rem;
		word-break: keep-all;
	}
`;
