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
	isReported: string;
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
	isReported: string;
}

export type ReviewListType = ReviewType[];

export interface VolunteerType {
	_id: string;
	title: string;
	content: string;
	centName: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	user_id: string;
	createdAt: string;
	images?: string[];
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
