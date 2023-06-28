import type { Meta, StoryObj } from '@storybook/react';
import Calender from './Calendar';

const meta: Meta<typeof Calender> = {
	title: 'Components/Calendar',
	component: Calender,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
