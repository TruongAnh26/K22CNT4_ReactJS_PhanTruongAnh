import React from 'react'
import PtaUseContext1 from './PtaUseContext1'
import "../App.css"
export const ThemeContext = React.createContext()
export default function PtaUseContext() {
    const [theme, setTheme] = React.useState('light')
  return (
    <div>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <h2>Demo-useContext</h2>
            <PtaUseContext1 />
        </ThemeContext.Provider>
    </div>
  )
}
