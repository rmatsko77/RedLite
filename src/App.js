import './App.css';
import { Header } from './components/Header/Header';
import { SubredditList } from './components/SubredditList/SubredditList';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <Header />
      <SubredditList />
    </div>
  );
}

export default App;
