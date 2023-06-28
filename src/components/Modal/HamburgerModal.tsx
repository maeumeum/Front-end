import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

import { getToken, deleteToken } from '@api/token';
import MyPageButton from '@components/MyPage/MyPageButton';
import {
	MobileStyles,
	MobileTopContainer,
	LoginContainer,
	ExitContainer,
} from './modal';
import exitLogo from '@assets/icons/exit.svg';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	setClick: Dispatch<SetStateAction<string>>;
}

const HamburgerModal = ({ isOpen, closeModal, setClick }: ModalProps) => {
	const [checkToken, setCheckToken] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleClose = () => {
		closeModal();
	};

	// 토큰 유무
	useEffect(() => {
		if (getToken()) {
			setCheckToken(true);
		}
	}, []);

	// 로그인 버튼을 클릭하여 로그인 화면으로 이동
	const loginHandler = () => {
		navigate('/login');
		window.scrollTo(0, 0);
		setClick(() => 'home');
		closeModal();
	};

	// 로그아웃 버튼 클릭하여 토큰 삭제
	const logoutHandler = () => {
		deleteToken();
		setClick(() => 'home');
		navigate('/');
		closeModal();
		window.location.reload();
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleClose}
			style={MobileStyles}>
			<MobileTopContainer>
				{!checkToken ? (
					<LoginContainer onClick={loginHandler}>
						로그인을 해주세요
					</LoginContainer>
				) : (
					<LoginContainer onClick={logoutHandler}>로그아웃</LoginContainer>
				)}
				<ExitContainer
					onClick={() => {
						closeModal();
					}}>
					<img src={exitLogo} alt='exit' />
				</ExitContainer>
			</MobileTopContainer>
			<MyPageButton setClick={setClick} />
		</ReactModal>
	);
};

export default HamburgerModal;
