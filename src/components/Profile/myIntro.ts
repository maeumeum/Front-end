import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 50rem;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 1rem;
		font-size: 12px;
	}
`;

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border: none;

	textarea {
		margin: 1rem auto;
		padding: 16px 18px;
		max-width: 66.5rem;
		resize: none;

		@media (max-width: 768px) {
			width: 50rem;
			font-size: 12px;
		}

		@media (max-width: 360px) {
			width: 30rem;
		}
	}
`;

export const IntroBox = styled.textarea`
	width: 66.5rem;
	min-height: 35rem;
	display: block;
	border: 1px solid #ccc;
	border-radius: 3%;
	padding: 3rem;
	margin-right: 1rem;

	&::placeholder {
		position: relative;
		top: 15px;
		left: 4px;
		font-size: 14px;
	}
`;

export const FormBtn = styled.button`
	height: 5rem;
	width: 17rem;
	border-radius: 5%;
	border: none;
	background-color: var(--button--color);
	color: ${({ theme }) => theme.colors.background};
	margin: 4rem 0 3rem 0;
	cursor: pointer;
	display: block;

	@media (max-width: 360px) {
		font-size: 10px;
		height: 4rem;
		width: 14rem;
	}
`;

export const CheckLength = styled.div`
	display: block;
`;

export const ImageLabel = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 3rem;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: #888888;
`;

export const ImageInput = styled.input`
	cursor: pointer;
`;
