import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 5rem;

	button {
		margin-top: 2rem;
		border: none;
		background-color: ${({ theme }) => theme.colors.background};
		cursor: pointer;
		color: #afcd81;
		font-size: 16px;
		&:hover {
			color: ${({ theme }) => theme.colors.pink200};
		}

		&.clicked {
			border-bottom: 2px solid #afcd81;
		}
	}
`;
