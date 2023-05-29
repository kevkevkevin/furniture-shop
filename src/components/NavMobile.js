import React from 'react';

import {navigation} from '../data'
import Logo from '../assets/img/logo.png'

const NavMobile = () => {
  return <div className='bg-primary w-full h-full shadow-2xl'>
    
    <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
    <a href="./">
      <img src={Logo} alt='furnishop' className='lg:w-[80px] lg[80px] w-[65px] h-[65px] items-center justify-center text-center'/>
    </a>
      {navigation.map((item, index) => {
        return (
          <li key={index}>
            <a className='text-xl font-medium text-white capitalize' href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  </div>;
};

export default NavMobile;
