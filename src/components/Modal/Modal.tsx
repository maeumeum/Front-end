import ReactModal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import UserForm from '@components/UserForm/UserForm.tsx';
import { customStyles, mobileTeamStyles } from '@components/Modal/modal';
import MyReview from '@components/MyPost/MyReview';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	user?: string;
	isChangePasswordModal?: boolean;
	id?: string;
}

const Modal = ({
	isOpen,
	closeModal,
	user,
	isChangePasswordModal,
	id,
}: ModalProps) => {
	const handleClose = () => {
		closeModal();
	};
	const isMobile = useMediaQuery({
		query: '(max-width:360px)',
	});

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleClose}
			style={isMobile ? mobileTeamStyles : customStyles}>
			{user ? (
				<UserForm
					closeModal={closeModal}
					isChangePasswordModal={isChangePasswordModal}
				/>
			) : (
				<MyReview closeModal={closeModal} id={id} />
			)}
		</ReactModal>
	);
};
export default Modal;
