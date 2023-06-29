import { useMediaQuery } from 'react-responsive';

import { CommunityCardProps } from '@src/types/cardType';
import {
	CommunityContainer,
	QnaType,
	TogetherType,
	CommunityTitle,
	WriterNickname,
	SearchQna,
	SearchTogether,
	SearchTitle,
	SearchNickname,
} from '@components/Card/card';

const CommunityCard = ({
	communityData,
	onClick,
	searchPage,
}: CommunityCardProps) => {
	const isPc = useMediaQuery({
		query: '(min-width:769px)',
	});

	const title =
		communityData.title.length > 15
			? `${communityData.title.slice(0, 15)}...`
			: communityData.title;

	const searchTitle =
		communityData.title.length > 30
			? `${communityData.title.slice(0, 30)}...`
			: communityData.title;

	const mobileTitle =
		communityData.title.length > 25
			? `${communityData.title.slice(0, 25)}...`
			: communityData.title;

	return (
		<>
			<CommunityContainer onClick={onClick}>
				{!searchPage ? (
					<>
						{communityData.postType === 'qna' ? (
							<QnaType>QnA</QnaType>
						) : (
							<TogetherType>동행</TogetherType>
						)}
						<div>
							{isPc ? (
								<CommunityTitle>{title}</CommunityTitle>
							) : (
								<CommunityTitle>{mobileTitle}</CommunityTitle>
							)}
							<WriterNickname>{communityData.user_id.nickname}</WriterNickname>
						</div>
					</>
				) : (
					<>
						{communityData.postType === 'qna' ? (
							<SearchQna>QnA</SearchQna>
						) : (
							<SearchTogether>동행</SearchTogether>
						)}
						<SearchTitle>{searchTitle}</SearchTitle>
						<SearchNickname>{communityData.user_id.nickname}</SearchNickname>
					</>
				)}
			</CommunityContainer>
		</>
	);
};

export default CommunityCard;
