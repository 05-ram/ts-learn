import React from 'react'
import ThemeContext from './ThemeContext'
import { theme } from './theme'

type ThemeProps = {
    children: React.ReactNode
}

const ThemeContextProvider = ({ children }: ThemeProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider