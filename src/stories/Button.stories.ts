import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: '확인',
	},
};

export const Secondary: Story = {
	args: {
		label: '확인',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: '확인',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		label: '확인',
	},
};
