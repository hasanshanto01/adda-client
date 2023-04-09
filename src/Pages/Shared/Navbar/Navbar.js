import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/adda.png';
import tom from '../../../assets/tom.png';
import { HomeIcon, CameraIcon, ChatBubbleBottomCenterTextIcon, BellIcon } from '@heroicons/react/24/outline'

const Navbar = () => {

    const category = <>
        <li>
            <NavLink to='/' className="tooltip tooltip-right tooltip-primary" data-tip="Home">
                <HomeIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/media' className="tooltip tooltip-right tooltip-primary" data-tip="Media">
                <CameraIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/message' className="tooltip tooltip-right tooltip-primary" data-tip="Message">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/notification' className="tooltip tooltip-right tooltip-primary" data-tip="Notification">
                <BellIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
    </>;

    const categoryForLargeDevice = <>
        <li>
            <NavLink to='/' className="tooltip tooltip-bottom tooltip-primary" data-tip="Home">
                <HomeIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/media' className="tooltip tooltip-bottom tooltip-primary" data-tip="Media">
                <CameraIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/message' className="tooltip tooltip-bottom tooltip-primary" data-tip="Message">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
        <li>
            <NavLink to='/notification' className="tooltip tooltip-bottom tooltip-primary" data-tip="Notification">
                <BellIcon className="h-8 w-8 text-neutral" />
            </NavLink>
        </li>
    </>;

    const userCategory = <>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 drop-shadow-md  md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-20">
                        {category}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" className='w-20' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {categoryForLargeDevice}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="flex items-center gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-36 h-10" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-primary btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={tom} alt='user' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24">
                            {userCategory}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;