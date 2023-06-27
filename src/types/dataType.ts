import WritePageProps from '@components/WritePage/WritePageProps';

export interface DataType {
	data: any;
	error: any;
}

export interface VolunteerDataType {
	title: string;
	registerCount: string;
	deadline: string;
	image: string;
	startDate: string;
	endDate: string;
	applyCount: string;
	actType: string;
	statusName: string;
}

export interface PostDataType {
	title: string;
	inputTitle: string;
	selectedActType: string;
	inputRegisterCount: string;
	teenager: boolean;
	deadline: Date;
	startDate: Date;
	endDate: Date;
	centName: string;
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
