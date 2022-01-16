import React, { useState } from 'react'

export const NavbarLink = () => {
    const [btnLabel, setBtnLabel] = useState('Copy Link');
    const link = 'https://www.google.com';

    const copyLink = () => {
        navigator.clipboard.writeText(link);
    }

    const handleClick = () => {
        setBtnLabel('Copied!');
        copyLink();
    }

    return (
        <div className='navbar_link_container'>
            <a className="navbar_link_container_url" href={link} target="_blank" rel="noreferrer">{link}</a>
            <button className="navbar_link_container_btn" onClick={handleClick}>{btnLabel}</button>
        </div>
    )
}
