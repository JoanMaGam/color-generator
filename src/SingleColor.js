import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {

  const [alert, setAlert] = useState(false);
  console.log(index);

  const bcg = rgb.join(',');

  // const hex = `#${hexColor}`
  let hex2 = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // Copy to clipboard:
        navigator.clipboard.writeText(hex2)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex2}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
