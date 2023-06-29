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
		font-size: 1.6rem;
		line-height: 3rem;
		&:hover {
			color: var(--button--color);
		}
	}
`;
