import styled from 'styled-components';

export const SmallButton = styled.button`
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	height: 4rem;
	border-radius: 5%;
	cursor: pointer;

	@media (max-width: 360px) {
		height: 4rem;
		font-size: 8px;
	}
`;
