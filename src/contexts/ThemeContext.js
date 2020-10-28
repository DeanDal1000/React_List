import  React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state ={
        isLightTheme: true,
        light: { text: '#555', ui: '#ddd', bg: '#eee'},
        dark: { text: '#ddd', ui: '#333', bg: '#555'}
    }
    render() {
        return (
            //Wrap our different components
           <ThemeContext.Provider value={{...this.state}}>
                {/* wraps Nav & BookList as it is thier children */}
                {this.props.children}
           </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
