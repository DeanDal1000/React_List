import  React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state ={
        isLightTheme: true,
        light: { text: '#555', ui: '#ddd', bg: '#eee'},
        dark: { text: '#ddd', ui: '#333', bg: '#555'}
    }

    toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
}
    render() {
        return (
            //Wrap our different components
            //Using a single context API, to do one function which is to toggle the theme
           <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {/* wraps Nav & BookList as it is thier children */}
                {this.props.children}
           </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
