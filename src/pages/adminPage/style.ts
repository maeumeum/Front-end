import styled from 'styled-components';

export const TeamCardContainer = styled.div`
	margin: 8rem 46rem;
	display: grid;
	min-width: 102.4rem;
	min-height: 80rem;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 4rem;

	@media (max-width: 768px) {
		margin: 8rem 2rem;
	}

	@media (max-width: 450px) {
		margin: 8rem 2rem;
		min-width: 33rem;
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const TopBarContainer = styled.div`
	display: flex;
	width: 112rem;
	margin: 6.4rem auto 0;
`;

export const ClickTopBar = styled.div`
	width: 10%;
	text-align: center;
	padding: 2rem 1rem;
	border-bottom: ${(props) =>
		props.className === 'curr' ? '1px solid #aacb73' : 'none'};
	font-size: 1.5rem;
	color: ${(props) => (props.className === 'curr' ? '#aacb73' : '#202020')};
	cursor: pointer;
`;

export const TopBar = styled.div`
	width: 10%;
	text-align: center;
	padding: 2rem 1rem;
	border-bottom: 1px solid #aacb73;
	font-size: 1.5rem;
	color: #aacb73;
`;

export const MenuBar = styled.div`
	position: absolute;
	width: 10%;
	border-radius: 5px;
	margin: 15.5rem 0 0 10rem;
	top: 5.5rem;

	@media (max-width: 1024px) {
		position: relative;
		width: 100%;
		margin: 0;
		top: 3rem;
	}
`;

export const PostContainer = styled.div`
	margin: 6.4rem auto 6.4rem 50rem;
	min-height: 80rem;

	@media (max-width: 768px) {
		margin: 6.4rem 0;
		width: 100%;
	}
`;

export const UserContainer = styled.div`
	min-width: 112rem;
	min-height: 80rem;
	margin: 6rem 40rem 4rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 2rem;

	@media (max-width: 768px) {
		margin: 8rem 2rem;
		min-width: 33rem;
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 450px) {
		margin: 8rem 2rem;
		min-width: 33rem;
		grid-template-columns: repeat(2, 1fr);
	}
`;
