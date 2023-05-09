import './App.css';
import { Header } from './components/Header/Header';
import { SubredditList } from './components/SubredditList/SubredditList';
import { Feed } from './components/Feed/Feed';
import { Filter } from './components/Filter/Filter';
import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }

  return (
    <Provider store={store}>
      <div className='app' id={theme}>
          <Header toggleTheme={toggleTheme} />
          <div className='main'>
            <div className='side-bar'>
              <Filter />
              <SubredditList />
            </div>
            <Feed />
          </div>
      </div>
    </Provider>
  );
}

export default App;
