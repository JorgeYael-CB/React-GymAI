import { createContext, useContext, useState, ReactNode, ReactElement } from "react";

interface AuthContextType {
  isLogged: boolean;
  token: string;
  data: userData;
  login: (token: string, userData: any) => void;
  logout: () => void;
}

interface userData {
  email: string;
  name: string;
  id: string;
  roles: string[];
  verify: boolean;
  isActive: boolean;
  totalAmountPaid: number;
}

const defaultAuthContext: AuthContextType = {
  isLogged: false,
  token: '',
  data: {
    email: '',
    name: '',
    id: '',
    roles: [],
    verify: false,
    isActive: false,
    totalAmountPaid: 0,
  },
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);


export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [authState, setAuthState] = useState<Omit<AuthContextType, 'login' | 'logout'>>(defaultAuthContext);

  const login = (token: string, userData: userData) => {
    setAuthState({
      isLogged: true,
      token,
      data: userData,
    });
  };

  const logout = () => {
    setAuthState(defaultAuthContext);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);