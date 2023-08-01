import { create } from 'zustand';

interface ShareModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useShareModel = create<ShareModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useShareModel;