import styled from 'styled-components';

export const FormContainer = styled.div`
	min-height: 50rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border: none;
`;

export const IntroBox = styled.textarea`
	width: 55rem;
	min-height: 35rem;
	display: block;
	border: 1px solid #ccc;
	border-radius: 10%;
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
	border-radius: 13px;
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	margin: 4rem 0 3rem 0;
	cursor: pointer;
	display: block;
`;

export const CheckLength = styled.div`
	display: block;
`;
