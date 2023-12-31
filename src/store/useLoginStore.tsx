import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LoginType } from '@src/types/authType';

const useLoginStore = create<LoginType>()(
	persist(
		(set) => ({
			isLogin: false,
			setIsLogin: () => {
				set({ isLogin: true });
			},
			resetLogin: () => {
				set({ isLogin: false });
			},
		}),
		{
			name: 'isLogin',
		},
	),
);

export default useLoginStore;
