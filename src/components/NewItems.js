import React from 'react';

import NewItemsSlider from '../components/NewItemsSlider'

//import data
import {newInStore} from '../data'

const NewItems = () => {
  //destructure newInStore
  const {title, subtitle, link, icon} = newInStore
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          {/* text */}
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
            <h2 className='title mb-2-[245px] lg:mt-[30px] lg:mb-[90px] lg:max-w-[100%] max-w-[200px]'>{title}</h2>
            <p className='max-w-[245px] lg:mb-12'>{subtitle}</p>
            <div className='hidden lg:flex items-center'>
              <a href='{}' className='hover:border-b border-primary lg:items-center font-medium transition-all'>{link}</a>
              <div className='text-3xl'>{icon}</div>
            </div>
          </div>
          {/* slider */}
          <div className='lg:max-w-[880px] xl:max-w-[990px] lg:relative lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div> 
    </section>

  );
};

export default NewItems;
