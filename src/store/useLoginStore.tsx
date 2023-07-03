import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LoginType } from '@src/types/authType';

const useIsLoginStore = create<LoginType>()(
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

export default useIsLoginStore;
