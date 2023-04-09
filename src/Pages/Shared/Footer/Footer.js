import React from 'react';
import logo from '../../../assets/adda.png';
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center py-6 px-14 bg-base-100 text-primary border border-primary">
            <div className="items-center grid-flow-col">
                <img src={logo} alt="logo" className='w-20' />
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className='flex justify-end w-full'>
                <Link to='/about' className="tooltip tooltip-primary" data-tip="About">
                    <InformationCircleIcon className="h-8 w-8 text-primary" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;