import User from "@/model/User";
import { createContext, useState } from "react";

interface Props {
  user?: User;
  loginGoogle?: () => Promise<void>;
  children?: any;
}

const AuthContext = createContext<Props>({});

async function getUser(user: User): Promise<User> {
  // const token = await getToken();

  return {
    uui: '',
    email: '',
    name: '',
    token: '',
    provider: '',
    imageUrl: '',  
  }; 
}

export function AuthProvider(props: Props) {
  const [user, setUser] = useState<User>();

  async function loginGoogle() {
    console.log('Authenticating....');
  }
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      loginGoogle 
    }}>
      {props.children}
    </AuthContext.Provider>
  )

}


export default AuthContext;