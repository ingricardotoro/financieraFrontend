import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logocredisa from '../../src/logocredisa.png'
import userLogo from '../../src/user.png'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

function Navbar() {
   
    const toggleFullScreen = ()=>{
            return
    }

    const {user,dispatch} = useContext(AuthContext)
    const history = useHistory()
    
    const handleLogout =()=>{
      dispatch({
        type:types.logout
      })
      history.replace('/login')
    }


    return (

      <div id="pcoded" className="pcoded">
      <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          
       
        <nav className="navbar header-navbar pcoded-header">
           <div className="navbar-wrapper">
          <div className="navbar-logo" >
            <a className="mobile-menu" id="mobile-collapse" href="#!">
              <i className="ti-menu" />
            </a>
            <a className="mobile-search morphsearch-search"  href="/">
              <i className="ti-search" />
            </a>
            <a href="/">
              <img className="img-fluid" style={{height:"40px"}} src={logocredisa} alt="Logo-credisa" />
            </a>
            <a className="mobile-options">
              <i className="ti-more" />
            </a>
          </div>
          <div className="navbar-container container-fluid">
            <div>
              <ul className="nav-left">
                <li>
                  <div className="sidebar_toggle"><a  href="javascript:void(0)"><i className="ti-menu" /></a></div>
                </li>
               
               
                <li>
                  <a  onClick={toggleFullScreen}  href="javascript:toggleFullScreen()"> 
                    <i className="ti-fullscreen" />
                  </a>
                </li>
                
              </ul>
              <ul className="nav-right">
               <li className="user-profile header-notification">
                  <a  href="/clientes">
                    <img src={userLogo} alt="User-Profile" />
                    <span>{user.name}</span>
                    <i className="ti-angle-down" />
                  </a>
                  <ul className="show-notification profile-notification">
                   
                    <li>
                      <a href="user-profile.html">
                        <i className="ti-user" /> Perfil
                      </a>
                    </li>
                   
                    <li>
                      <Link onClick={()=>handleLogout()}>
                        <i className="ti-layout-sidebar-left" /> Salir
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* search */}
              <div id="morphsearch" className="morphsearch">
                <form className="morphsearch-form">
                  <input className="morphsearch-input" type="search" placeholder="Search..." />
                  <button className="morphsearch-submit" type="submit">Search</button>
                </form>
                <div className="morphsearch-content">
                  
                  
                  
                </div>
                {/* /morphsearch-content */}
                <span className="morphsearch-close"><i className="icofont icofont-search-alt-1" /></span>
              </div>
              {/* search end */}
            </div>
          </div>        
          </div>
        
        </nav>
      
        </div>
        </div>
    )
}

export default Navbar
