interface DateDataType {
	date: Date;
	changeYear: (value: number) => void;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
}

export default DateDataType;
