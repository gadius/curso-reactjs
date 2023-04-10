import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Post from './components/Post';

function App() {
  return (
    <>
      <Post author="test1" body="test msj"/>
      <Post author="test2" body="test msj2"/>
      <Post author="test3" body="test msj3"/>
      <Post author="test4" body="test msj4"/>
    </>
  );
}

export default App;
