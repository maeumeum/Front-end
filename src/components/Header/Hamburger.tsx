import { Dispatch, SetStateAction } from 'react';

import useModalStore from '@src/store/userModalStore';
import HamburgerModal from '@components/Modal/HamburgerModal';
import hamburgerBtn from '@assets/icons/hamburgerBtn.svg';
import { HamburgerBtnContainer } from './style';

interface ClickProps {
	setClick: Dispatch<SetStateAction<string>>;
}

const HamburgerComponent = ({ setClick }: ClickProps) => {
	const { isOpen, toggleModal } = useModalStore();

	return (
		<HamburgerBtnContainer>
			<img src={hamburgerBtn} alt='hamburgerBtn' onClick={toggleModal} />
			<HamburgerModal
				isOpen={isOpen}
				closeModal={toggleModal}
				setClick={setClick}
			/>
		</HamburgerBtnContainer>
	);
};

export default HamburgerComponent;
