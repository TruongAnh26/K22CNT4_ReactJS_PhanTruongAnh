import React from 'react'
import { ThemeContext } from './PtaUseContext'
export default function PtaUseContext1() {
    const {theme,setTheme} = React.useContext(ThemeContext)
  return (
    <div className={theme}>
        <h2>Pta useContext</h2>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Change Theme
        </button>
    </div>
  )
}
