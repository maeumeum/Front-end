import {
	getVolunHistoryCardType,
	MyVolunCardProps,
	getVolunSuggestDataProps,
} from '@src/types/cardType';

export const transformVolunData = (
	volunPropsArray: getVolunHistoryCardType,
): MyVolunCardProps => {
	const volunCardData = {
		title: volunPropsArray.volunteer_id.title,
		thumbnail: volunPropsArray.volunteer_id.images[0],
		startDate: volunPropsArray.volunteer_id.startDate,
		endDate: volunPropsArray.volunteer_id.endDate,
		statusName: volunPropsArray.volunteer_id.statusName,
		isReviewed: volunPropsArray.isReviewed,
		volunId: volunPropsArray.volunteer_id._id,
		nickname: volunPropsArray.volunteer_id.register_user_id.nickname,
		authorization: volunPropsArray.volunteer_id.register_user_id.authorization,
		userImage: volunPropsArray.volunteer_id.register_user_id.image,
		volunApplyId: volunPropsArray._id,
	};
	return { volunCardData };
};

export const transformVolunSuggestData = (
	volunPropsArray: getVolunSuggestDataProps,
): MyVolunCardProps => {
	const volunCardData = {
		title: volunPropsArray.title,
		thumbnail: volunPropsArray.images[0],
		startDate: volunPropsArray.startDate,
		endDate: volunPropsArray.endDate,
		statusName: volunPropsArray.statusName,
		volunId: volunPropsArray._id,
		nickname: volunPropsArray.register_user_id.nickname,
		authorization: volunPropsArray.register_user_id.authorization,
		userImage: volunPropsArray.register_user_id.image,
		volunApplyId: volunPropsArray._id,
	};
	return { volunCardData };
};
