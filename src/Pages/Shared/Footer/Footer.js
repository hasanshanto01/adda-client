import React from 'react';
import logo from '../../../assets/adda.png';
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center py-6 px-14 bg-primary text-white border border-primary">
            <div className="items-center grid-flow-col">
                <div className='w-24 p-2 rounded-md bg-base-100'>
                    <img src={logo} alt="logo" />
                </div>
                <p className='text-lg'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className='flex justify-end w-full'>
                <Link to='/about' className="tooltip" data-tip="About">
                    <InformationCircleIcon className="h-10 w-10 text-white" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;