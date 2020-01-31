import React from 'react';
import './Toolbar.css';

class Toolbar extends React.Component {
    state = {
    };

    render () {
        return (<div className = 'root'>

             <header>
             <div className = 'naslov'>
                 Document App        
             </div>
             
             <div className = 'naslovnaTraka'>
             </div>
             </header>
             
             <main>
                 <div className = 'menu'>
                     <div className = 'options' id = 'start'><i class="fas fa-home"></i><a href = '/Start'>Start</a></div>
                     <div className = 'options' id = 'apps'>
                        <i class="fas fa-bars"></i><a href = ''>Web apps</a><i id = 'down' class="fas fa-angle-down"></i>
                            <ul className = 'dropmenu'>
                                <li><a href = "/ReactApp">React app</a></li>
                                <li><a href = ''>Dojo app</a></li>
                            </ul>
                     </div>
                 </div>
                 <div className = 'sadrzaj'>
                     Start
                 </div>
             </main>
            </div>
        )}
    };
export default Toolbar;