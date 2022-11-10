import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Gillian';
const MY_NAME = 'Gillian  ';

function Profile(name){
    if (name.toUpperCase() === MY_NAME.toUpperCase()){
      return <main id="content" role="main" className="base">
       <h1>{name}'s React Page</h1>
        <p>Example of react JSX in action</p>
       </main>
  } else if (name !== "") {
    return <main id="content" role="main" className="base">
       <h1>{name}'s React Page</h1>
        <p>Gillian likes lasagna</p>
       </main>
  } else {
    return <main id="content" role="main" className="base">
       <h1>{name}'s React Page</h1>
        <p>Nothing to see here!</p>
       </main>
  }
}   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));

