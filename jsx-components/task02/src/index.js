import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';

function App() {
  return (
      //Replace the string below with the JSX Profile component
      <Profile name ="Gillian" bio="likes lasagna."/>
      // "Return the JSX Profile function as a JSX element here"
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

