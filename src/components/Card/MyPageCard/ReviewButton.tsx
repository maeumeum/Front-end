import { useState } from 'react';
import { ButtonContainer } from '@components/Card/card.ts';
import { SmallButton } from '@components/Buttons/SmallButton.ts';
import { ReviewProps } from '@src/types/cardType';
import Modal from '@components/Modal/Modal.tsx';
import { VolunteerTypes } from '@src/types/myPageConstants.ts';

const ReviewButton = ({ statusName, isReviewed, volunId }: ReviewProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleModal = (onoff: boolean) => () => {
		setIsOpen(onoff);
	};
	if (statusName !== VolunteerTypes.DISCONTINUE && !isReviewed) {
		return (
			<>
				<ButtonContainer>
					<SmallButton onClick={toggleModal(true)}>리뷰작성</SmallButton>
				</ButtonContainer>
				<Modal isOpen={isOpen} closeModal={toggleModal(false)} id={volunId} />
			</>
		);
	}
	return null;
};

export default ReviewButton;
