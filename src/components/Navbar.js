import React from 'react'

function Navbar() {

    const toggleFullScreen = ()=>{
            return
    }

    return (
   
       
        <nav className="navbar header-navbar pcoded-header">
         <div className="navbar-wrapper">
          <div className="navbar-logo">
            <a className="mobile-menu" id="mobile-collapse" href="#!">
              <i className="ti-menu" />
            </a>
            <a className="mobile-search morphsearch-search" href="#">
              <i className="ti-search" />
            </a>
            <a href="index.html">
              <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
            </a>
            <a className="mobile-options">
              <i className="ti-more" />
            </a>
          </div>
          <div className="navbar-container container-fluid">
            <div>
              <ul className="nav-left">
                <li>
                  <div className="sidebar_toggle"><a href="#"><i className="ti-menu" /></a></div>
                </li>
                <li>
                  <a className="main-search morphsearch-search" href="#">
                    {/* themify icon */}
                    <i className="ti-search" />
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={toggleFullScreen}>
                    <i className="ti-fullscreen" />
                  </a>
                </li>
                
              </ul>
              <ul className="nav-right">
               <li className="user-profile header-notification">
                  <a href="#!">
                    <img src="assets/images/user.png" alt="User-Profile-Image" />
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
                      <a href="#!">
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
                  <div className="dummy-column">
                    <h2>People</h2>
                    <a className="dummy-media-object" href="#!">
                      <img className="round" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" alt="Sara Soueidan" />
                      <h3>Sara Soueidan</h3>
                    </a>
                    <a className="dummy-media-object" href="#!">
                      <img className="round" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" alt="Shaun Dona" />
                      <h3>Shaun Dona</h3>
                    </a>
                  </div>
                  <div className="dummy-column">
                    <h2>Popular</h2>
                    <a className="dummy-media-object" href="#!">
                      <img src="assets/images/avatar-1.png" alt="PagePreloadingEffect" />
                      <h3>Page Preloading Effect</h3>
                    </a>
                    <a className="dummy-media-object" href="#!">
                      <img src="assets/images/avatar-1.png" alt="DraggableDualViewSlideshow" />
                      <h3>Draggable Dual-View Slideshow</h3>
                    </a>
                  </div>
                  <div className="dummy-column">
                    <h2>Recent</h2>
                    <a className="dummy-media-object" href="#!">
                      <img src="assets/images/avatar-1.png" alt="TooltipStylesInspiration" />
                      <h3>Tooltip Styles Inspiration</h3>
                    </a>
                    <a className="dummy-media-object" href="#!">
                      <img src="assets/images/avatar-1.png" alt="NotificationStyles" />
                      <h3>Notification Styles Inspiration</h3>
                    </a>
                  </div>
                </div>
                {/* /morphsearch-content */}
                <span className="morphsearch-close"><i className="icofont icofont-search-alt-1" /></span>
              </div>
              {/* search end */}
            </div>
          </div>        
        </div>
        </nav>
      
    )
}

export default Navbar
