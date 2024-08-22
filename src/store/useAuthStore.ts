import { create } from 'zustand';
import Cookies from 'js-cookie';

interface LoginState {
  isLogin: boolean;
  setIsLogin: () => void;
}
export const useLoginStore = create<LoginState>((set, get) => ({
  isLogin: false,
  setIsLogin: () => {
    if (get().isLogin) {
      set({ isLogin: false });
      Cookies.remove('loginToken');
    } else {
      set({ isLogin: true });
    }
  },
}));
