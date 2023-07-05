export interface CommentType {
	_id: string;
	content: string;
	createdAt: string;
	isReported: boolean;
	post_id: string;
	updatedAt: string;
	user_id: {
		authorization: boolean;
		image: string;
		nanoid: string;
		nickname: string;
		uuid: string;
	};
}

export type CommentListType = CommentType[];
