import React, { useState, useContext } from 'react';
// import icons
import { RiCalendarCheckLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';
import DatePick from './DatePick';

const DateDropdown = () => {
  const { date, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiCalendarCheckLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {date}
          </div>
          <div className='text-[13px]'>Choose Dates</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setProperty(property)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              <DatePick />
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;
