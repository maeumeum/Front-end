// Datalist Type
export interface CommunityType {
	_id: string;
	user_id: {
		nickname: string;
	};
	title: string;
	postType: string;
	createdAt: string;
	content: string;
	isReported: boolean;
}

export type CommunityListType = CommunityType[];

export interface ReviewType {
	_id: string;
	title: string;
	content: string;
	volunteer_id: string;
	user_id: {
		nickname: string;
	};
	index: number;
	createdAt: string;
	images: string[];
	isReported: boolean;
}

export type ReviewListType = ReviewType[];

export interface VolunteerType {
	_id: string;
	title: string;
	content?: string;
	register_user_id: {
		nickname: string;
		uuid: string;
	};
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	user_id?: string;
	createdAt: string;
	images: string[];
}

export type VolunteerListType = VolunteerType[];

export interface TeamType {
	_id: number;
	category: string;
	teamName: string;
	establishmentDate: string;
	introduction: string;
	briefHistory: string;
	location: string;
	phone: string;
	user_id: {
		_id: string;
		nickname: string;
	};
	createdAt: string;
	image?: string;
	isSubmit: boolean;
}

export type TeamListType = TeamType[];

export interface VolunteerCommentType {
	volunteer_id: string;
	content: string;
}

export type VolunteerCommentListType = VolunteerCommentType[];

export interface VolunteerDetailType {
	// 카드 데이터
	_id: string;
	title: string;
	content?: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	createdAt: string;
	images: string[];
	startDate?: string;
	endDate?: string;
	// 글 작성자 데이터
	register_user: {
		nickname: string;
		introduction?: string;
		image: string;
	};
	// 글 작성자의 인증단체 데이터
	team: {
		category?: string;
		teamName: string;
		introduction?: string;
		briefHistory?: string;
		establishmentDate?: string;
		phone?: string;
		location?: string;
		image?: string;
	};
	// 댓글 - api 따로있음
}
// 봉사활동 전체보기 카드 한 개에 들어가야 할 데이터:
export interface VolunteerTogetherType {
	_id: string;
	title: string;
	teamName: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	images: string[];
	register_user_id: {
		_id: string;
		nickname: string;
		image: string;
		uuid: string;
	};
	createdAt: string;
}
// // 봉사활동 전체보기 리스트
export type VolunteerTogetherListType = VolunteerTogetherType[];

export interface CommentType {
	_id: string;
	user_id: {
		nickname: string;
	};
	content: string;
	post_id: string;
	isReported: boolean;
}

export type CommentListType = CommentType[];

export interface getVolunHistoryCardType {
	_id: string;
	isParticipate: boolean;
	isReviewed: boolean;
	user_id: string;
	volunteer_id: {
		startDate: string;
		endDate: string;
		register_user_id: {
			nickname: string;
			image: string;
			authorization: boolean;
		};
		_id: string;
		title: string;
		statusName: string;
		deadline: string;
		images: string[];
	};
}

export interface getVolunSuggestDataProps {
	_id: string;
	title: string;
	statusName: string;
	deadline: string;
	startDate: string;
	endDate: string;
	images: string[];
	register_user_id: {
		nickname: string;
		image: string;
		introduction: string;
		authorization: boolean;
	};
}

import { TabTypes } from '@src/types/myPageConstants';
export interface MyVolunCardProps {
	volunCardData: {
		title: string;
		thumbnail: string;
		startDate: string;
		endDate: string;
		statusName: string;
		isReviewed?: boolean;
		volunId: string;
		userImage: string;
		authorization: boolean;
		nickname: string;
		volunApplyId: string;
	};
	currTab?: string;
}

export interface ReviewProps {
	statusName: string;
	isReviewed?: boolean;
	volunId: string;
}

export interface SuggestStatusSelectorProps {
	selectedStatus: string;
	volunId: string;
	isPastEndDate: boolean;
}

export interface AppliedStatusSelectorProps {
	volunApplyId: string;
	volunId: string;
	handleClickTab?: (tab: TabTypes) => void;
}
