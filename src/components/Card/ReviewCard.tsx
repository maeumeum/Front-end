import { useMediaQuery } from 'react-responsive';

import { ReviewType } from '@src/types/cardType.ts';
import {
	ReviewSection,
	ImageContainer,
	ReviewImage,
	ReviewContainer,
	Nickname,
	ReviewTitle,
	ReviewContent,
} from './card.ts';
import imgData from '@assets/images/volunteer2.jpg';

interface ReviewCardProps {
	reviewData: ReviewType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const apiURL = import.meta.env.VITE_API_URL;

const ReviewCard = ({ reviewData, onClick }: ReviewCardProps) => {
	const isPc = useMediaQuery({
		query: '(min-width:769px)',
	});
	const key = reviewData.index;
	const reviewImg = `${apiURL}/${reviewData.images[0]}`;

	//Content 미리보기 함수
	const content =
		reviewData.content.length > 60
			? `${reviewData.content.slice(0, 60)}...`
			: reviewData.content;

	const mobileContent =
		reviewData.content.length > 30
			? `${reviewData.content.slice(0, 30)}...`
			: reviewData.content;

	//다른 색상 카드 구현
	const colorClass = (key: number) => {
		if (key === 0) {
			return 'one';
		} else if (key === 2) {
			return 'three';
		}
	};

	return (
		<ReviewSection className={colorClass(key)} onClick={onClick}>
			<ImageContainer>
				<ReviewImage src={reviewData.images[0] ? reviewImg : imgData} />
			</ImageContainer>
			<ReviewContainer>
				<Nickname className={colorClass(key)}>
					{reviewData.user_id.nickname}
				</Nickname>
				<ReviewTitle className={colorClass(key)}>
					{reviewData.title}
				</ReviewTitle>
				<ReviewContent className={colorClass(key)}>
					{isPc ? content : mobileContent}
				</ReviewContent>
			</ReviewContainer>
		</ReviewSection>
	);
};

export default ReviewCard;
