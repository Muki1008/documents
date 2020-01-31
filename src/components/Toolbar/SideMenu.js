import React from 'react';
import './SideMenu.css';

class SideMenu extends React.Component{
    render () {
        return (<div className = 'menu'>
                    <div className = 'options' id = 'start'><div className = 'selectStart'></div><i class="fas fa-home"></i><a href = '/Start'>Start</a></div>
                        <div className = 'options' id = 'apps'><div className = 'selectWebApps'></div>
                            <i class="fas fa-bars"></i><a href = ''>Web apps</a><i id = 'down' class="fas fa-angle-down"></i>
                                <ul className = 'dropmenu'>
                                    <li><a href = "/ReactApp">React app</a></li>
                                    <li><a href = '/DojoApp'>Dojo app</a></li>
                                </ul>
                        </div>
                </div>)
    }
}
export default SideMenu;

