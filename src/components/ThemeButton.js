import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

// class ThemeButton extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context
//         return (
//          <button onClick={toggleTheme}>Toggle Theme</button>
//         )
//     }
// }

const ThemeButton = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>

    )
}

export default ThemeButton
