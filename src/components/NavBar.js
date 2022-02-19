// rfce
import React from 'react';
import Logo from "../logo__.png";
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
        <div className
        ="border 
        pl-12 py-4 space-x-8
         flex  items-center 
         bg-teal-500
        ">
            <img className="w-[50px] md:w-[60px]" src={Logo}></img>
            <Link to="/" className=
            {`text-white
            font-bold 
            text-xl
            md:text-3xl`}>Movies</Link>
            <Link to="favourites" className="text-white font-bold text-xl md:text-3xl">Favourites</Link>
        </div>
    </>;
}

export default NavBar;
