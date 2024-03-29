import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const App = () => {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();



    try {
      const colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }

  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => { setColor(e.target.value) }}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor
            key={index}
            {...color}
            hexColor={color.hex}
            index={index} />
        })}
      </section>
    </>
  );

}

export default App;
