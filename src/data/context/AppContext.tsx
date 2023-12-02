import { createContext, useEffect, useState } from "react";

// type Theme = 'dark' | '';

interface Props {
  theme?: string;
  changeTheme?: () => void;
}

const AppContext = createContext<Props>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState('dark');
  
  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    // setTheme(savedTheme)
  }, [])
  
  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;