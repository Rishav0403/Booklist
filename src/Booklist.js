import React from 'react'
import Book from './Book';
import books from './data';

// const names = ['Rishav', 'Keshav', 'Vishal', 'Sourabh', 'Surya', 'Niraj'];

// const newNames = names.map((name) => {
//     return (<h1>{name}</h1>);
// })

const Booklist = () => {
  return (
    <section className='booklist'>
      {/* <div>{newNames}</div> */}
      {
        books.map((book) => {
          return (<Book key={book.key} data={book} />);
        })
      }
    </section>
  );
}

export default Booklist