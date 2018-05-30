import React from 'react';


function Nav(){
  function scrollToPage(pageSelector) {
    const goToPage = document.querySelector(pageSelector);
    const toElement = (element) => {
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
    toElement(goToPage);
  }
  function scrollToTop(){
      window.scrollTo({
        top: 10,
        behavior: 'smooth',
        block: 'start'
      });
  }


  return(
    <div className="sidebar">
      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 10%;
          left: 2%;
        }
        .sidebar-links-container {
          height: 40vh;
          width: 10vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .nav-link-sidebar {
          text-shadow: .2px .2px 0px #ffffff38;
          color: orange;
          border: .1px solid #ffffff38;
          font-family: 'Carrois Gothic SC', sans-serif;
          padding: 5%;
          font-size: 3vw;
        }
        `}</style>
      <div className="sidebar-links-container">
        <div className="nav-link-sidebar" onClick={(e) => scrollToTop()}>
          <p>Back to top</p>
        </div>
        <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.about-container')}>
          About
        </div>
        <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.gallery-container')}>
          Gallery
        </div>
        <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.contact-container')}>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Nav;
