import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.className === 'writePage' ? '112rem' : '95rem')};
	margin-bottom: 20rem;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LayoutContainer = styled.div`
	display: flex;
	justify-content: space-between;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 3rem;
`;

export const LayoutChildContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 20rem;
`;

export const TopTitle = styled.h2`
	margin: 0 auto 2.5rem;
	font-size: 2.8rem;
`;

export const DateTitle = styled.h2`
	margin: 10rem 0 2.5rem;
	text-align: left;
	padding-right: 20rem;
	font-size: 2rem;
`;

export const WriteTextContainer = styled.div`
	margin: 3rem 0 10rem;
`;

export const TitleInput = styled.input`
	width: 100%;
	margin: ${(props) =>
		props.className === 'writePage' ? '0 auto' : '0 auto 3rem'};
	border: none;
	font-size: 3.5rem;
	font-weight: 600;
	color: #a7a7a7;
	@media (max-width: 768px) {
		margin-top: 5rem;
	}
`;

export const ContentInput = styled.textarea`
	width: 95%;
	margin: 0 auto;
	height: ${(props) => (props.className === 'textWrite' ? '65rem' : '50rem')};
	border: 1px solid ${({ theme }) => theme.colors.gray400};
	font-size: ${({ theme }) => theme.typography.size.default};
	padding: ${(props) => (props.className === 'textWrite' ? '2.5%' : '5rem')};
	border-radius: 5px;
	resize: none;
`;

export const TextContainer = styled.div`
	margin-bottom: 10rem;
`;

export const TextLength = styled.p`
	margin-left: auto;
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-top: -9rem;
	margin-bottom: 10rem;
	color: ${({ theme }) => theme.colors.gray400};
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-left: auto;
	@media (max-width: 768px) {
		justify-content: space-between;
		width: 95%;
		position: absolute;
		top: -7rem;
	}
`;

export const CancelButton = styled.button`
	width: 9rem;
	height: 5rem;
	background-color: ${({ theme }) => theme.colors.background};
	border: 0.2rem solid #888888;
	border-radius: 1.2rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	@media (max-width: 768px) {
		border: none;
		color: ${({ theme }) => theme.colors.gray600};
		font-size: 2.3rem;
	}
`;

export const SubmitButton = styled.button`
	width: 9rem;
	height: 5rem;
	background-color: ${({ theme }) => theme.colors.green200};
	border: none;
	border-radius: 1.2rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: #ffffff;
	@media (max-width: 768px) {
		border: none;
		color: ${({ theme }) => theme.colors.green300};
		font-size: 2.3rem;
		background-color: ${({ theme }) => theme.colors.background};
	}
`;

export const ImageArea = styled.label`
	display: inline-block;
	padding: 8px 16px;
	text-align: center;
	background-color: var(--color--footer);
	color: ${({ theme }) => theme.colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 20rem;
	font-size: 2rem;
	margin-top: -13rem;

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
`;
