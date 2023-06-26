import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getMonth, getYear } from 'date-fns';

import DateDataType from '@src/types/dateType';
import { limitCalendarRange } from '@utils/dateUtils';
import {
	CustomDatePicker,
	CustomHeaderContainer,
	Month,
	Year,
	MonthButton,
} from './style';
import 'react-datepicker/dist/react-datepicker.css';
import rightArrow from '@assets/icons/right_arrow.svg';
import leftArrow from '@assets/icons/left_arrow.svg';

interface CalendarProps {
	selectedDate: Date | null;
	setSelectedDate: Dispatch<SetStateAction<Date>>;
	category: string;
}

const CURRENT_YEAR = getYear(new Date());

const YEARS = Array.from(
	{ length: getYear(new Date()) + 1 - 2000 },
	(_, i) => getYear(new Date()) - i,
);

const VOLUNYEARS = Array.from(
	{ length: CURRENT_YEAR + 2 - CURRENT_YEAR },
	(_, i) => CURRENT_YEAR + i,
);

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const Calendar = ({
	selectedDate,
	setSelectedDate,
	category,
}: CalendarProps) => {
	const limitRange = limitCalendarRange();
	console.log(category);
	return (
		<CustomDatePicker>
			<DatePicker
				locale={ko}
				dateFormat='yyyy.MM.dd'
				formatWeekDay={(nameOfDay: string) => nameOfDay.substring(0, 1)}
				showYearDropdown
				scrollableYearDropdown
				shouldCloseOnSelect
				yearDropdownItemNumber={100}
				calendarClassName='date-picker-calendar'
				minDate={
					category === 'teamAuth'
						? new Date('2000-01-01')
						: new Date(limitRange[0])
				}
				maxDate={category === 'teamAuth' ? new Date() : new Date(limitRange[1])}
				selected={selectedDate}
				onChange={(date: Date) => setSelectedDate(date)}
				renderCustomHeader={({
					date,
					changeYear,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}: DateDataType) => (
					<CustomHeaderContainer>
						<MonthButton
							type='button'
							onClick={decreaseMonth}
							disabled={prevMonthButtonDisabled}>
							<img src={leftArrow} />
						</MonthButton>
						<Month>{MONTHS[getMonth(date)]}</Month>
						<Year
							value={getYear(date)}
							onChange={({ target: { value } }) => changeYear(+value)}>
							{category === 'teamAuth'
								? YEARS.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
								  ))
								: VOLUNYEARS.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
								  ))}
						</Year>
						<MonthButton
							type='button'
							onClick={increaseMonth}
							disabled={nextMonthButtonDisabled}>
							<img src={rightArrow} />
						</MonthButton>
					</CustomHeaderContainer>
				)}
			/>
		</CustomDatePicker>
	);
};

export default Calendar;
