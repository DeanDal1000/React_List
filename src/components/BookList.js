import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';


 class BookList extends Component {
     static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark;
        return (
            <div  className="book-list" style={{ color: theme.text, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>Misery</li>
                    <li style={{ background: theme.ui }}>IT</li>
                    <li style={{ background: theme.ui }}>LOTR</li>
                </ul>
            </div>
        )
    }
}

export default BookList;