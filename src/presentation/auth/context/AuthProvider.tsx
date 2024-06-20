import { createContext, useContext, useState, ReactNode, ReactElement, useEffect } from "react";
import { UserDbInterface } from "../../interfaces";


const storageName = 'SportAI';

interface AuthContextType {
  isLogged: boolean;
  token?: string;
  data?: UserDbInterface;
  login: (token: string, userData: any) => void;
  logout: () => void;
}

const getValue = ():AuthContextType => {
  const value = localStorage.getItem(storageName);

  const data = value? JSON.parse( value ) : {
    isLogged: false,
    token: '',
    data: {
      email: '',
      name: '',
      id: '',
      roles: [],
      isVerify: false,
      isActive: false,
      totalAmountPaid: 0,
      coments: [],
      date: new Date(),
      messages: [],
    },
  };

  return {...data, login:() => {}, logout: () =>{} }
}

export const AuthContext = createContext<AuthContextType>(getValue());


export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [authState, setAuthState] = useState<Omit<AuthContextType, 'login' | 'logout'>>(getValue());


  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(authState));
  }, [authState]);


  const login = (token: string, userData: UserDbInterface) => {
    setAuthState({
      isLogged: true,
      token,
      data: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem(storageName);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);