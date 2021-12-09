import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

interface IDecodedUser {
  id: number;
  email: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

interface IinitialState {
  user: IDecodedUser | null;
}

enum ActionKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}
interface IAction {
  type: ActionKind;
  payload: IDecodedUser | null;
}
const initialState: IinitialState = {
  user: null,
};

if (typeof window !== "undefined") {
  if (localStorage.getItem("jwtToken")) {
    const decodeUserFromToken: IDecodedUser = jwtDecode(
      localStorage.getItem("jwtToken")
    );
    if (decodeUserFromToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
    } else {
      initialState.user = decodeUserFromToken;
    }
  }
}

export const AuthContext = createContext({
  user: null,
  login: (userToken: string) => {},
  logout: () => {},
});

const authReducer = (state: IinitialState, action: IAction) => {
  switch (action.type) {
    case ActionKind.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ActionKind.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userToken: string) => {
    const user: IDecodedUser = jwtDecode(userToken);
    localStorage.setItem("jwtToken", userToken);
    dispatch({
      type: ActionKind.LOGIN,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: ActionKind.LOGOUT,
      payload: null,
    });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
