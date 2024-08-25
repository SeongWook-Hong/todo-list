import { create } from 'zustand';
import Cookies from 'js-cookie';

interface LoginState {
  isLogin: boolean;
  loginName: string | undefined;
  setIsLogin: (nickname?: string) => void;
}
export const useLoginStore = create<LoginState>((set) => ({
  isLogin: false,
  loginName: undefined,
  setIsLogin: (nickname?: string) => {
    if (nickname) {
      set({ isLogin: true, loginName: nickname });
    } else {
      set({ isLogin: false, loginName: undefined });
      Cookies.remove('loginToken');
    }
  },
}));
