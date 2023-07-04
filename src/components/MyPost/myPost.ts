import styled from 'styled-components';

interface PostProps {
	isCommunity?: boolean;
}

export const PostListContainer = styled.div`
	border-radius: 10px;
`;

export const PostBox = styled.div<PostProps>`
	width: ${({ isCommunity }) => (isCommunity ? '95rem' : '85rem')};
	padding: 3rem;
	border: 1px solid #e6e6e6;
	border-radius: 10px;
	margin-bottom: 3rem;
	&:hover {
		box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.1);
	}
	@media (max-width: 768px) {
		margin-left: 3rem;
		width: 56rem;
	}
	@media (max-width: 360px) {
		width: 35rem;
		margin: 2rem auto;
	}
`;

export const Title = styled.p`
	padding: 4px;
	font-family: kakaoBig;
	font-size: ${({ theme }) => theme.typography.size.subparagraph};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	letter-spacing: 0em;
	text-align: left;
	border-bottom: 3px solid #afcd81;
`;

export const Description = styled.div`
	margin: 0;
	padding: 4px;
	font-family: kakaoReg;
	word-break: keep-all;
	font-size: ${({ theme }) => theme.typography.size.paragraph};
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
`;

export const PostInfo = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	p {
		color: #666666;
		font-family: kakaoReg;
		font-size: ${({ theme }) => theme.typography.size.paragraph};
		font-weight: ${({ theme }) => theme.typography.weight.regular};
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}
	p + p {
		margin-left: 2rem;
	}
`;

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
	margin-right: 4rem;
	display: flex;

	button + button {
		margin-left: 2rem;
	}

	@media (max-width: 360px) {
		margin-right: 0;
		flex-direction: column;

		button + button {
			margin-top: 1rem;
			margin-left: 0;
		}
	}
`;
