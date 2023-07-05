export interface DataType {
	data: any;
	error: any;
}

export interface VolunteerDataType {
	title: string;
	registerCount: string;
	deadline: string;
	image?: string;
	startDate: string;
	endDate: string;
	applyCount: string;
	actType: string;
	statusName: string;
}

export interface PostDataType {
	content: string;
	inputTitle: string;
	selectedActType: string;
	inputRegisterCount: string;
	teenager: boolean;
	deadline: Date;
	startDate: Date;
	endDate: Date;
	centName: string;
}

export interface WritePageProps {
	onSave: (inputTitle: string, textContent: string) => void;
	onCancel: () => void;
}

export interface VolunteerWritePageProps
	extends Omit<WritePageProps, 'onSave'> {
	onSave: (
		inputTitle: string,
		textContent: string,
		selectedActType: string,
		inputRegisterCount: string,
		teenager: boolean,
		deadline: Date,
		startDate: Date,
		endDate: Date,
		centName: string,
	) => void;
}

export interface ImageData {
	setFile: (file: File | null) => void;
	imageType: 'thumbnail' | 'image';
}
