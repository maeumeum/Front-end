import { create } from 'zustand';

import useLoginStore from '@src/store/useLoginStore';
import { get } from '@api/api';
import { SubmitType } from '@src/types/authType';
import { DataType } from '@src/types/dataType';

const useSummitStore = create<SubmitType>((set) => {
	return {
		isSubmit: false,
		setIsSubmit: async () => {
			const { isLogin } = useLoginStore();
			if (isLogin) {
				const responseData = await get<DataType>('/api/team/auth');
				set({ isSubmit: responseData.data.isSubmit });
			}
		},
		resetSubmit: () => set({ isSubmit: false }),
	};
});

export default useSummitStore;
