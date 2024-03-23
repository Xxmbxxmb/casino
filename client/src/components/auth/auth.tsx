// import React, { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { User } from '../../models/User';
// import { getUserInfo, signOut } from '../../redux/slices/userThunk';

// export interface AuthContextType {
//     user?: User;
//     isLoading: boolean;
// }

// export var AuthContext = React.createContext<AuthContextType>(null!)

// export function useAuth() {
//     return React.useContext(AuthContext)
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//     const dispatch = useAppDispatch();
//     const auth = useAppSelector((state) => state.auth);
//     const isLoading = useAppSelector((state) => state.user.isLoading);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((newUser) => {
//             if (newUser) {
//                 dispatch(getUserInfo());
//             } else {
//                 dispatch(signOut());
//             }
//         });
//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user: user, isLoading: isLoading }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
export const x = {}