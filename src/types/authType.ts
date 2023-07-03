import { UserType } from '@src/types/userType';

export interface AuthType {
	userData: UserType | null;
	getUserData: () => void;
}

export interface LoginType {
	isLogin: boolean;
	setIsLogin: () => void;
	resetLogin: () => void;
}

export interface SubmitType {
	isSubmit: boolean;
	setIsSubmit: () => void;
	resetSubmit: () => void;
}

export interface UuidType {
	uuidData: string;
	setUUID: (uuidData: string) => void;
}

export interface ModalStateType {
	isOpen: boolean;
	toggleModal: () => void;
}
