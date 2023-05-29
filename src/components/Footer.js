import React from 'react';

import Logo from '../assets/img/logo.png'

import { footer } from '../data'

const Footer = () => {
  return (
    <footer className='section bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0' href='#'>
            <img src={Logo} alt='furnishop' className='w-[100px] h-[100px]'/>
          </a>
          {/* social */}
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href='#'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        {/* copyrihht text */}
        <p className='text-center'>
          &copy; KevinShop 2023 - All rights reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
