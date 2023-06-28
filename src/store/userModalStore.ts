import { create } from 'zustand';

import { ModalStateType } from '@src/types/authType';

const useModalStore = create<ModalStateType>((set) => ({
	isOpen: false,
	toggleModal: () => {
		set((state) => ({ isOpen: !state.isOpen }));
	},
}));

export default useModalStore;
