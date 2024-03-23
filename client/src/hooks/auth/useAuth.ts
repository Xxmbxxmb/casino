import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserInfo } from "../../redux/slices/userThunk";
import { getCurrentGames } from "../../redux/slices/gamesThunk";
import { refreshToken } from "../../redux/slices/authThunk";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth)
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if (auth.token) {
      dispatch(getCurrentGames())
      dispatch(getUserInfo())
      setIsAuthenticated(true)
    } else {
      dispatch(refreshToken())
    }

  }, [auth.token])



  return {
    isAuthenticated,
    user
  };
};
