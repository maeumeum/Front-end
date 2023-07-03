import { useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import useLoginStore from '@src/store/useLoginStore.tsx';
import useAuthStore from '@src/store/useAuthStore';
import useModalStore from '@src/store/userModalStore.ts';
import {
	ButtonContainer,
	ButtonWord,
	MobileButton,
	MobileWord,
} from './myPage.ts';

interface ClickProps {
	setClick: Dispatch<SetStateAction<string>>;
	header?: boolean;
}

const MyPageButton = ({ setClick, header }: ClickProps) => {
	const isPc = useMediaQuery({
		query: '(min-width:1024px)',
	});
	const isMobile = useMediaQuery({
		query: '(max-width:1023px)',
	});
	const { userData, getUserData } = useAuthStore();
	const { isLogin } = useLoginStore();
	const { toggleModal } = useModalStore();
	const navigate = useNavigate();

	// user 정보 불러오기
	useEffect(() => {
		if (isLogin) {
			getUserData();
		}
	}, []);

	// user page
	const myPageHandler = () => {
		navigate('/mypage');
		window.scrollTo(0, 0);
		setClick(() => 'home');
		toggleModal();
	};

	// admin page
	const adminHandler = () => {
		navigate('/admin/team_auth');
		window.scrollTo(0, 0);
		setClick(() => 'home');
	};

	return (
		<>
			{isLogin && userData !== null && isPc ? (
				<>
					{userData.role === 'user' ? (
						<ButtonContainer onClick={myPageHandler}>
							<ButtonWord>MY</ButtonWord>
						</ButtonContainer>
					) : (
						<ButtonContainer onClick={adminHandler}>
							<ButtonWord>관리자</ButtonWord>
						</ButtonContainer>
					)}
				</>
			) : isLogin && isMobile && !header ? (
				<>
					{userData !== null && userData.role === 'user' ? (
						<MobileButton onClick={myPageHandler}>
							<MobileWord>마이페이지</MobileWord>
						</MobileButton>
					) : (
						<MobileButton onClick={adminHandler}>
							<MobileWord>관리자 페이지</MobileWord>
						</MobileButton>
					)}
				</>
			) : (
				''
			)}
		</>
	);
};

export default MyPageButton;
