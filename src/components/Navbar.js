import React from 'react'

function Navbar() {

    const toggleFullScreen = ()=>{
            return
    }

    return (

      <div id="pcoded" className="pcoded">
      <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          
       
        <nav className="navbar header-navbar pcoded-header">
           <div className="navbar-wrapper">
          <div className="navbar-logo" style={{backgroundColor:"white"}}>
            <a className="mobile-menu" id="mobile-collapse" href="/">
              <i className="ti-menu" />
            </a>
            <a className="mobile-search morphsearch-search"  href="/">
              <i className="ti-search" />
            </a>
            <a href="/">
              <img className="img-fluid" style={{height:"50px"}} src="assets/images/logo.png" alt="Theme-Logo" />
            </a>
            <a className="mobile-options"  href="/">
              <i className="ti-more" />
            </a>
          </div>
          <div className="navbar-container container-fluid">
            <div>
              <ul className="nav-left">
                <li>
                  <div className="sidebar_toggle"><a  href="/"><i className="ti-menu" /></a></div>
                </li>
                <li>
                  <a className="main-search morphsearch-search"  href="/">
                    {/* themify icon */}
                    <i className="ti-search" />
                  </a>
                </li>
                <li>
                  <a  onClick={toggleFullScreen}  href="/"> 
                    <i className="ti-fullscreen" />
                  </a>
                </li>
                
              </ul>
              <ul className="nav-right">
               <li className="user-profile header-notification">
                  <a  href="/clientes">
                    <img src="assets/images/user.png" alt="User-Profile" />
                    <span>John Doe</span>
                    <i className="ti-angle-down" />
                  </a>
                  <ul className="show-notification profile-notification">
                   
                    <li>
                      <a href="user-profile.html">
                        <i className="ti-user" /> Perfil
                      </a>
                    </li>
                   
                    <li>
                      <a href="/">
                        <i className="ti-layout-sidebar-left" /> Salir
                      </a>
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
