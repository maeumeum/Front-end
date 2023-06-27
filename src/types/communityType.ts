export interface CommunityType {
	content: string;
	createdAt: string;
	images: string[];
	isReported: boolean;
	postType: string;
	title: string;
	updatedAt: string;
	user_id: string;
	_id: string;
	user: string;
	userRole: string;
	nickname: string;
	nanoid: string;
}

export type CommunityListType = CommunityType[];
