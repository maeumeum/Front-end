import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	width: 112rem;
	margin-bottom: 20rem;
	@media (max-width: 768px) {
		width: 90%;
	}
`;
export const Title = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	margin-top: 5rem;
`;

export const EditCommentArea = styled.textarea`
	width: 95rem;
	padding: 2rem;
	margin-left: 2rem;
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.typography.size.default};
	resize: none;
	white-space: pre-wrap;
	@media (max-width: 768px) {
		width: 80%;
	}
`;
export const BtnContainer = styled.div`
	margin-top: 4rem;
	display: flex;
	margin-left: -13rem;
	margin-top: 2rem;
	gap: 1rem;
	@media (max-width: 768px) {
		margin-left: -32rem;
	}
`;
export const BtnContainer2 = styled.div`
	margin-top: 4rem;
	display: flex;
	margin-left: 92rem;
	margin-top: 12rem;
	gap: 1rem;
	margin-bottom: 2rem;
	@media (max-width: 768px) {
		margin-left: 75rem;
	}
`;
export const CommentLength = styled.p`
	font-size: ${({ theme }) => theme.typography.size.default};
	display: block;
	margin: 1rem 2rem 0 106rem;
	color: ${({ theme }) => theme.colors.gray400};
`;
export const Box = styled.div`
	width: 0.8rem;
	height: 2.5rem;
	background-color: ${({ theme }) => theme.colors.text};
	margin-right: 2rem;
`;
export const Comment = styled.p`
	font-size: 2.4rem;
`;

export const Btn1 = styled.button`
	background-color: #aacb73;
	width: 9rem;
	height: 4.4rem;
	border-radius: ${({ theme }) => theme.radius.s1};
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.background};
`;
export const Btn2 = styled.button`
	background-color: ${({ theme }) => theme.colors.pink200};
	width: 9rem;
	height: 4.4rem;
	border-radius: ${({ theme }) => theme.radius.s1};
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.background};
`;
export const Btn3 = styled.button`
	background-color: ${({ theme }) => theme.colors.pink200};
	width: 9rem;
	height: 4.4rem;
	border-radius: ${({ theme }) => theme.radius.s1};
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-top: -13rem;
	margin-bottom: 2rem;
	margin-left: 10rem;
`;
export const CommentContainer = styled.div`
	height: 32rem;
	border: none;
	border-radius: ${({ theme }) => theme.radius.s1};
	margin-bottom: 2rem;
	position: relative;
	word-wrap: break-word;
	word-break: break-word;
	background-color: ${({ theme }) => theme.colors.gray100};
`;

export const ProfileContainer = styled.div`
	margin-top: 5rem;
	display: flex;
`;

export const Profile = styled.img`
	width: 6.8rem;
	height: 6.8rem;
	border-radius: 100rem;
	margin-right: 3rem;
`;
export const PhotoContainer = styled.div`
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	margin-top: 4rem;
	margin-left: 2rem;
	overflow: hidden;
`;
export const Img = styled.img`
	width: auto;
	height: 100%;
`;
export const CommentArea = styled.textarea`
	width: 105rem;
	padding: 4rem;
	font-size: ${({ theme }) => theme.typography.size.default};
	border: none;
	height: 6rem;
	resize: none;
	background-color: ${({ theme }) => theme.colors.gray100};
	border-radius: ${({ theme }) => theme.radius.s1};
	white-space: 'pre-wrap';
	@media (max-width: 768px) {
		width: 90%;
	}
`;
export const UserContainer = styled.div`
	margin: 0 0 0 2rem;
`;
export const UserName = styled.p`
	font-size: 2.1rem;
	margin-top: 5rem;
`;
export const NanoId = styled.p`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.gray500};
	margin-top: 5rem;
	margin-left: 1rem;
`;

export const NameContainer = styled.div`
	display: flex;
`;
export const Date = styled.p`
	font-size: ${({ theme }) => theme.typography.size.paragraph};
	color: ${({ theme }) => theme.colors.gray500};
	position: absolute;
	top: 2rem;
	right: 2rem;
`;

export const Contents = styled.p`
	font-size: ${({ theme }) => theme.typography.size.default};
	color: #475569;
	margin: 4rem;
	position: absolute;
	top: 8rem;
	left: 10rem;
	margin-bottom: 1rem;
`;

export const CommentHolder = styled.p`
	font-size: ${({ theme }) => theme.typography.size.default};
	color: ${({ theme }) => theme.colors.gray400};
`;
export const BtnReport = styled.button`
	background-color: inherit;
	border-radius: ${({ theme }) => theme.radius.s1};
	border: none;
	height: 5rem;
	width: 9rem;
	margin-top: 1rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: ${({ theme }) => theme.colors.highlight};
	margin-left: auto;
`;
