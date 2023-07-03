import styled from 'styled-components';

export const SearchBarForm = styled.form`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 5.8rem;
	margin-top: 6.4rem;
	display: flex;

	@media (max-width: 768px) {
		margin-top: 5.8rem;
		padding: 0;
		height: 3rem;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 3.5rem 0;
	border-radius: ${({ theme }) => theme.radius.s1};
	border: 1px solid ${({ theme }) => theme.colors.gray300};

	@media (max-width: 768px) {
		width: 70%;
		padding: 3rem 0;
	}
`;

export const SearchBarInput = styled.input`
	margin-left: 2rem;
	box-sizing: border-box;
	width: 85rem;
	height: 5.8rem;
	border: none;
	outline: none;
	font-size: ${({ theme }) => theme.typography.size.default};

	@media (max-width: 768px) {
		width: 100%;
		height: 3rem;
	}
`;
export const SearchLogo = styled.img`
	margin-left: 2rem;
	width: 3rem;
	height: 4.4rem;

	@media (max-width: 768px) {
		width: 3rem;
		height: 3rem;
	}
`;

export const SearchBarBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 4.5rem;
	padding: 3.5rem 0;
	width: 11.5rem;
	height: 5.8rem;
	background-color: ${({ theme }) => theme.colors.green200};
	border-radius: 1.2rem;
	color: white;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};

	&:hover {
		background-color: ${({ theme }) => theme.colors.green300};
	}

	@media (max-width: 768px) {
		margin-left: 5%;
		padding: 3rem 0;
		width: 15%;
		height: 3rem;
	}
`;
