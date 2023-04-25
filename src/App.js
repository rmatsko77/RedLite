import './App.css';
import { Header } from './components/Header/Header';
import { SubredditList } from './components/SubredditList/SubredditList';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Header />
        <SubredditList />
      </Provider>
    </div>
  );
}

export default App;
