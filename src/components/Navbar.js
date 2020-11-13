import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//     static contextType = ThemeContext;
//     render() {
//         //Destructuring, getting these properties from context
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <nav style={{ background: theme.ui, color: theme.text }}>
//             <h1>Context App</h1> 
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         );
//     }
// }

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.text }}>
        <h1>Context App</h1> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;