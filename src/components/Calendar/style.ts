import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const CustomDateInput = styled(DatePicker)`
	border: none;
	padding: 1rem 0;
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.gray600};
	cursor: pointer;
`;

export const CustomDatePicker = styled.div`
	.date-picker-calendar {
		border-radius: 12px;
		border: 1px solid ${({ theme }) => theme.colors.gray300};

		.react-datepicker__triangle {
			display: none;
		}

		.react-datepicker__header {
			border: none;
			padding: 1rem;
			font-weight: 400;
			background-color: transparent;
			color: ${({ theme }) => theme.colors.text};
			cursor: pointer;

			.react-datepicker__day-names {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0 1rem;
				font-size: 2rem;
			}
		}

		.react-datepicker__month-container {
			.react-datepicker__month {
				margin: 0 1rem 1rem;

				.react-datepicker__week {
					font-size: 1.6rem;

					.react-datepicker__day {
						padding: 1rem;

						&:hover {
							border-radius: 12px;
						}
					}
				}
			}
		}

		.react-datepicker__day--today {
			font-weight: 400;
		}

		.react-datepicker__day--selected {
			background-color: ${({ theme }) => theme.colors.green200};
			color: ${({ theme }) => theme.colors.background};
			border-radius: 12px;
		}

		.react-datepicker__day--outside-month {
			cursor: default;
			color: ${({ theme }) => theme.colors.gray400};
		}
	}
`;

export const CustomHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	height: 100%;
	margin-bottom: 1rem;
`;

export const Month = styled.span`
	width: 9rem;
	font-size: 1.6rem;
	font-weight: 500;
`;

export const Year = styled.select`
	background-color: #ffffff;
	color: #000000;
	border: none;
	font-size: 1.6rem;
	font-weight: 500;
	padding-right: 5px;
	cursor: pointer;
`;

export const MonthButton = styled.button`
	display: flex;
	background-color: transparent;
	align-items: center;
	margin: auto 1rem;
	width: 4rem;
	height: 4rem;
	border: none;
	cursor: pointer;

	img {
		width: 100%;
	}
`;

export const CalenderWrapper = styled.div`
	background-color: #ffffff;
	color: #000000;
`;
