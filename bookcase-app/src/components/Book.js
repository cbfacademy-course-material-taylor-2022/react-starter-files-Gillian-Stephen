import React from 'react';

// function Book({book:{id,

  // return "This is the output of a book component. Replace this string with code to display an individual book's attributes.";
// return "Welcome to the book case app";
  function Book({book:{ id, 
    saleInfo: {retailPrice}, 
    volumeInfo: { 
    title, 
    authors, 
    description, 
    imageLinks: {thumbnail}
      }}}) {
   return ( 
     <div className="book">
     <img src={thumbnail} alt={title}/>
     <div>
     <h2 title={title}>{title}</h2>
     {retailPrice && <p>£{retailPrice.amount}</p>}
     {authors && <p>{authors.join(', ')}</p>}
     {description && <p>{description}</p>}
     </div>
   </div>);
}

function addBook(title) {
  console.log(`The Book 
 '${title}' was clicked`);
  }

  // 

export default Book;
