import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ThemeButton/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
