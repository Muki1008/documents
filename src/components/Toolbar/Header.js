import React from 'react';
import './Header.css';

class Header extends React.Component{
    render () {
        return <div className = 'zaglavlje'>
                    <div className = 'naslov'> Document App </div>     
                    <div className = 'naslovnaTraka'></div>
                </div>
    }
}
export default Header;