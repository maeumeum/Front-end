import { useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import useAuthStore from '@src/store/useAuthStore';
import useModalStore from '@src/store/userModalStore.ts';
import { getToken } from '@api/token';
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
	const { toggleModal } = useModalStore();
	const navigate = useNavigate();

	// user 정보 불러오기
	useEffect(() => {
		getUserData();
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
			{getToken() !== null && isPc ? (
				<>
					{userData !== null && userData.role === 'user' ? (
						<ButtonContainer onClick={myPageHandler}>
							<ButtonWord>MY</ButtonWord>
						</ButtonContainer>
					) : (
						<ButtonContainer onClick={adminHandler}>
							<ButtonWord>관리자</ButtonWord>
						</ButtonContainer>
					)}
				</>
			) : getToken() !== null && isMobile && !header ? (
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
