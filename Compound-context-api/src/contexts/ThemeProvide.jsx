import React, { createContext, useContext, useState } from 'react'

//setup my react context api

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider

export const useThemeData = () => useContext(ThemeContext)
