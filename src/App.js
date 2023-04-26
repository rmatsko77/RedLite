import './App.css';
import { Header } from './components/Header/Header';
import { SubredditList } from './components/SubredditList/SubredditList';
import { Feed } from './components/Feed/Feed';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Header />
        <div className='main'>
          <SubredditList />
          <Feed />
        </div>
      </Provider>
    </div>
  );
}

export default App;
