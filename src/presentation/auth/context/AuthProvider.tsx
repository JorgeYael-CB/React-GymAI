import { createContext, useContext, useState, ReactNode, ReactElement, useEffect } from "react";
import { UserDbInterface } from "../../interfaces";
import { VerifyTokenUseCase } from "../../../core";


const storageName = 'SportAI';

interface AuthContextType {
  isLogged: boolean;
  token?: string;
  data?: {
    email: string,
    name: string,
    id: string,
  };
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
    },
  };

  return {
    ...data,
    login:() => {},
    logout: () => {},
  }
}

export const AuthContext = createContext<AuthContextType>(getValue());


export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [authState, setAuthState] = useState<Omit<AuthContextType, 'login' | 'logout'>>(getValue());


  const login = (token: string, userData: UserDbInterface) => {
    const obj = {
      isLogged: true,
      token,
      data: {
        email: userData.email,
        id: userData.id,
        name: userData.name,
      },
    }

    setAuthState(obj);
    localStorage.setItem(storageName, JSON.stringify(obj));
  };

  const logout = () => {
    localStorage.removeItem(storageName);
    window.location.reload();
  };


  const validateJwt = async () => {
    if( authState.isLogged && authState.token && authState.token.trim() !== '' ){
      const data = await VerifyTokenUseCase({token: authState.token!});

      if(data.status === 401){
        logout();
      }
    }
  }

  useEffect(() => {
    validateJwt();
  }, [ authState ]);


  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);