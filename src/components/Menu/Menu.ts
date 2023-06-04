import styled from 'styled-components';

export const MenuContainer = styled.div`
	display: flex;
`;

export const MenuTitle = styled.p`
	color: var(--button--color);
	border-bottom: 1px solid #eeeeee;
	font-size: 1.8rem;
	font-weight: bold;
	padding: 1rem;
`;

export const Menus = styled.div`
	color: #000000;
	a {
		text-decoration: none;
		&:visited {
			text-decoration: none;
			color: #000000;
		}
	}
	p {
		&:hover {
			color: var(--button--color);
		}
	}
`;