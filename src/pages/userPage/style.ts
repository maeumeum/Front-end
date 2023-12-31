import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const flexcenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 로그인 css

export const LoginSection = styled(flexcenter)`
	position: relative;
	margin: 8rem 68.5rem 34rem;
	height: 75rem;

	@media (max-width: 768px) {
		margin: 8rem 2rem 25rem;
	}
`;

export const LogoContainer = styled.div`
	margin: 5rem 0 1.5rem;
	width: 12rem;
	height: 12rem;

	@media (max-width: 768px) {
		margin-bottom: 3rem;
		width: 10rem;
		height: 10rem;
	}
`;

export const LogoImage = styled.img`
	width: 12rem;
	height: 12rem;

	@media (max-width: 768px) {
		width: 10rem;
		height: 10rem;
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 55rem;
	height: 55rem;
	border: 1px solid ${({ theme }) => theme.colors.gray300};

	@media (max-width: 768px) {
		width: 40rem;
		height: 40rem;
	}
`;

export const EmailInput = styled.input`
	margin-top: 7rem;
	width: 45rem;
	height: 6rem;
	border: none;
	outline: none;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray400};
	font-size: 2rem;
	font-weight: bold;

	@media (max-width: 768px) {
		width: 28rem;
		height: 4rem;
		font-size: 1.6rem;
	}
`;

export const PasswordInput = styled.input`
	width: 45rem;
	height: 6rem;
	border: none;
	outline: none;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray400};
	font-size: 2rem;
	font-weight: bold;

	@media (max-width: 768px) {
		width: 28rem;
		height: 4rem;
		font-size: 1.6rem;
		margin-top: 1.5rem;
	}
`;
export const CheckData = styled(flexcenter)`
	margin-top: 3rem;
	width: 45rem;
	height: 6rem;
	background-color: ${({ theme }) => theme.colors.gray100};
	color: ${({ theme }) => theme.colors.error};
	font-size: 1.3rem;

	@media (max-width: 768px) {
		width: 28rem;
		height: 4rem;
		font-size: 1.5rem;
		margin-top: 2rem;
		padding: 1.5rem 0;
	}
`;

export const CheckEmail = styled(flexcenter)`
	margin-top: 3rem;
	width: 45rem;
	height: 6rem;
	background-color: ${({ theme }) => theme.colors.gray100};
	color: ${({ theme }) => theme.colors.error};
	font-size: 1.3rem;

	@media (max-width: 768px) {
		width: 28rem;
		height: 4rem;
		font-size: 1.5rem;
		margin-top: 2rem;
		padding: 1.5rem 0;
	}
`;

export const SignUpButton = styled(NavLink)`
	align-self: flex-start;
	margin: 13rem 0 3rem 5rem;
	color: #888888;
	font-size: 1.6rem;
	font-weight: 300;
	text-decoration: none;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 2rem;
		padding: 1.5rem 0;
	}
`;

type SignUpProps = {
	pageType?: string;
	isWidthdrawal?: boolean;
};

// 회원가입 css

export const SignUpSection = styled.div<SignUpProps>`
	position: relative;
	margin: 17rem 68.5rem 26.5rem;
	height: 77rem;
	width: 60rem;
	background-color: ${({ theme }) => theme.colors.gray100};
	border-radius: 20px;
	filter: drop-shadow(0 4px 4px rgb(0, 0, 0, 25%));

	${({ pageType }) =>
		pageType &&
		css`
			width: 60rem;
			height: 50rem;
			margin: 5rem 0 10rem;
			left: 30.5rem;

			@media (max-width: 768px) {
				width: 85%;
				left: 0;
			}

			@media (max-width: 360px) {
				width: 75%;
				left: 0;
			}
		`}

	@media (max-width: 768px) {
		margin: 13rem 4% 15rem;
		width: 92%;
	}
`;

export const SignUpForm = styled.div<SignUpProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4.3rem;
	position: relative;
	img {
		position: absolute;
		left: 11.3rem;
		top: 15.3rem;

		@media (max-width: 768px) {
			left: 6.3rem;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		align-items: ${({ isWidthdrawal }) =>
			isWidthdrawal ? 'flex-start' : 'center'};
	}

	@media (max-width: 360px) {
		width: 85%;
		margin: 0 auto;
	}
`;

export const InputContainer = styled.div`
	width: 45rem;

	@media (max-width: 768px) {
		width: 94%;
	}
`;

export const EmailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 45rem;
	height: 5.6rem;
	background-color: #ffffff;
	border: ${(props) => {
		if (props.className === 'submit') {
			return '1px solid #EB5757';
		}
		return '1px solid #CCCCCC;';
	}};
	border-radius: 8px;
	box-sizing: border-box;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const DataName = styled.p`
	margin-bottom: 0.8rem;
	text-align: start;
	font-size: 1.2rem;
	color: #666666;
`;

export const EmailData = styled.input<SignUpProps>`
	padding-left: 1rem;
	width: 70%;
	border: none;
	outline: none;
	text-align: start;
	font-size: 1.6rem;
	color: #666666;
`;

export const EmailButton = styled.button<SignUpProps>`
	width: 7.5rem;
	height: 3.5rem;
	margin-right: 1.5rem;
	background-color: var(--button--color);
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-weight: 100;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const DataInput = styled.input<SignUpProps>`
	width: ${(props) => {
		if (props.name === 'long') {
			return '60rem';
		}
		return '100%';
	}};
	height: 5.6rem;
	padding-left: 1rem;
	border: ${(props) => {
		if (props.value === '' && props.className !== '') {
			return '1px solid #EB5757';
		}
		return '1px solid #CCCCCC;';
	}};
	outline: none;
	border-radius: 8px;
	box-sizing: border-box;
	font-size: 1.6rem;

	@media (max-width: 768px) {
		width: 100%;
	}

	@media (max-width: 360px) {
		width: 100%;
	}
`;

export const CheckValue = styled.p`
	text-align: start;
	margin: 0.2rem 0.3rem 0;
	color: #eb5757;
	font-size: 1.2rem;
`;

export const WithdrawalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 360px) {
		align-items: flex-start;
		margin: 0 auto;
	}
`;

export const WithdrawalSection = styled.div`
	margin-left: 2rem;
	margin-bottom: 3rem;
	width: 70%;

	@media (max-width: 360px) {
		width: 100%;
		margin: 0 auto;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	button + button {
		margin-top: 3rem;
	}
`;
