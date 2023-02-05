import React from 'react';
import MusicB from '../images/icon-music.svg';
import '../Components/Button';

const Button = () => {
  return (
    <div className='Allbuttoncontents'>
      <div className='Allbuttonitems'>
          {/* content 1 */}
          <div>
            <img src={MusicB} alt="" />
        </div>
        {/* content 2 */}
        <div>
            <span>Annual Plan</span> <br />
            <span><a href="">$59.99/year</a></span>
        </div>
        {/* content3 */}
        <div className='change'>
            <a href="">Change</a>
        </div>
      </div>
    </div>
  )
};

export default Button