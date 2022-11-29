import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Book from './components/Book';
import data from './models/books.json';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search';

function App() {
  const [books] = useState(data);
  // return books.map(book => <Book key={book.id} book ={book}/>);
  return <>
    <Search />
    {books.map(book => <Book key={book.id} book={book}/>)}
  </>

  // return <Book/>;
}

export default App;

