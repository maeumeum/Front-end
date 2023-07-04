import { create } from 'zustand';
import { get } from '@api/api';
import { DataType } from '@src/types/dataType';
import { CardStateType } from '@src/types/dataType';

const useCardDataStore = create<CardStateType>((set) => ({
	appliedData: null,
	completedData: null,
	getAppliedData: async () => {
		const responseData = await get<DataType>('/api/applications?status=true');
		set({ appliedData: await responseData.data });
	},
	getCompletedData: async () => {
		const responseData = await get<DataType>('/api/applications?status=false');
		set({ completedData: await responseData.data });
	},
}));

export default useCardDataStore;
