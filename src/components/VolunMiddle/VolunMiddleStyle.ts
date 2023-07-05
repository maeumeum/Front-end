import styled from 'styled-components';

export const Container = styled.div`
	width: 112rem;
	margin: 0 auto;
	@media (max-width: 768px) {
		margin-left: 3rem;
		width: 80%;
	}
`;

export const Header = styled.header`
	display: flex;
	border-bottom: 1px solid #e5e5e5;
`;

export const Text = styled.p`
	font-size: 2rem;
	width: 100%;
`;
export const ActiveBtn = styled.div`
	&:hover {
		${Text} {
			color: #8dae54;
		}
	}
	margin-right: 5rem;
	cursor: pointer;
`;

export const TeamIntroBtn = styled.div`
	&:hover {
		${Text} {
			color: #8dae54;
		}
	}
	margin-right: 5rem;
	cursor: pointer;
`;

export const CommentBtn = styled.div`
	&:hover {
		${Text} {
			color: #8dae54;
		}
	}
	margin-right: 5rem;
	cursor: pointer;
`;
