import React from 'react'

const Book = (props) => {
//   console.log(props.data);
  const clickHandler = (e) => {
    console.log(e.target);
  }
  return (
    <article className='book'>
      <img src={props.data.img} alt='a' />
      <h1>{props.data.title.substring(0,23)+' ...'}</h1>
      <h4>{props.data.author}</h4>
      <button type='button' onClick={clickHandler}>Reference</button>
    </article>
  );
}

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }

// const Image = () => (<img src='' alt='a' />);

// const Title = () => (<h1>I Love You to the Moon and Back</h1>);

// const Author = () => ( <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hepworth</h4> );

export default Book;