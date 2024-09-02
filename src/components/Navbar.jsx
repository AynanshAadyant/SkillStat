import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-slate-800 text-white h-14 p-4'>
      <div className="logo flex items-center gap-1 text-lg font-bold cursor-pointer">
        <div ><FaGraduationCap /></div>
      
      <span>SkillEase</span>
      </div>
      <ul className='flex gap-3 text-md font-semibold' >
        <li><NavLink to="/" exact activeClassName="active ">Home</NavLink></li>
        <li><NavLink to="/progress" activeClassName="active">Your Progress</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
