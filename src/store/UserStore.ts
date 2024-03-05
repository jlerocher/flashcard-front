import { User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '../services/auth'; // Assuming you have a supabase instance

type UserState = {
    isLoggedIn: boolean;
    userInfo: User | null;
    setUserInfo: (userData: User | null) => void;
    setIsLoggedIn: (loggedIn: boolean) => void
    checkLoggedIn: (jwt:string) => Promise<boolean>;
};

export const useUserStore = create<UserState>((set) => ({
    isLoggedIn: false,
    userInfo: null,

    setIsLoggedIn: (loggedIn: boolean) => set(() => ({ isLoggedIn: loggedIn })),
    setUserInfo: (userData: User | null) => set({ userInfo: userData }),

    checkLoggedIn: async (jwt) => {
        try {
            const userResponse = await supabase.auth.getUser(jwt);
            const user = userResponse.data.user;
            if (user) {
                set({ isLoggedIn: true, userInfo: user });
                return true;
            } else {
                set({ isLoggedIn: false, userInfo: null });
                return false;
            }
        } catch (error) {
            console.error('Error checking login status:', (error as Error).message);
            return false;
        }
    },
}));
