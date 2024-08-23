import { create } from 'zustand';
import Cookies from 'js-cookie';

interface LoginState {
  isLogin: string | undefined;
  setIsLogin: (nickname?: string) => void;
}
export const useLoginStore = create<LoginState>((set, get) => ({
  isLogin: undefined,
  setIsLogin: (nickname?: string) => {
    if (get().isLogin) {
      set({ isLogin: undefined });
      Cookies.remove('loginToken');
    } else {
      set({ isLogin: nickname });
    }
  },
}));
