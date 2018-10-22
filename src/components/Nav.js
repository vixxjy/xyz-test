/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================

import React, { Component } from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light row justify-content-between bg-light">
                    <div>
                        <a className="uk-navbar-item uk-logo uk-padding-remove-horizontal" href="#"><img src={logo1} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item border-right">
                                <a className="uk-navbar-item uk-logo uk-padding-remove-horizontal" href="#"><img src={logo2} alt="" /></a>
                            </li>
                            <li className="ml-3 nav-item">
                                <a className="uk-navbar-item uk-logo uk-padding-remove-horizontal" href="#"><img src={logo3} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;