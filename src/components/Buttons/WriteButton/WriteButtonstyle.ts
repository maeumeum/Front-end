import styled from 'styled-components';

export const WriteBtn = styled.button`
	width: 11.5rem;
	height: 4.5rem;
	border: none;
	background: ${({ theme }) => theme.colors.gray400};
	border-radius: ${({ theme }) => theme.radius.m1};
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-left: auto;
`;
