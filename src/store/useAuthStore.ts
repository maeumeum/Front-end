import { create } from 'zustand';
import { get } from '@api/api';

import { AuthType } from '@src/types/authType';
import { DataType } from '@src/types/dataType';

const useAuthStore = create<AuthType>((set) => ({
	userData: null,
	getUserData: async () => {
		try {
			const responseData = await get<DataType>('/api/users/info', {
				withCredentials: true,
			});
			set({ userData: await responseData.data });
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useAuthStore;
