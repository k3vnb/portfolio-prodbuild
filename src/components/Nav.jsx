import React from 'react';
import logo from '../assets/images/logo.png';



class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.state.navOpacityFull = false;
    this.makeOpaque = this.makeOpaque.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.makeOpaque);
  }

  makeOpaque() {
    if (document.documentElement.scrollTop > 400) {
      this.setState({navOpacityFull: true});
    } else {
      this.setState({navOpacityFull: false});
    }
  }
  render(){
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
            top: -.5%;
            left: 0%;
            width: 100%;
            background-color: white;
            border-bottom: .5px solid #ffa90e8c;
            height: 7.8vh;
          }
          .sidebar-links-container-off {
            height: 100%;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 0;
            animation: become-transparent .2s;
            margin-left: 5%;
          }
          .sidebar-links-container-on {
            height: 100%;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: become-opaque 2s;
            margin-left: 5%;
          }
          .nav-links-right {
            display: flex;
            justify-content: space-between;
            width: 35%;
            margin-left: 5%;
          }
          .nav-link-sidebar {
            color: #4c4943;
            font-family: 'Carrois Gothic SC', sans-serif;
            font-size: 2vw;
            transition: text-shadow .1s;
          }
          .nav-link-sidebar:hover {
            cursor: pointer;
            transform: scale(1.015);
            text-shadow: .5px .5px 0px #0202029c;
          }
          .nav-link-sidebar:active {
            transform: scale(1.025);
            text-shadow: 0px 1px 5px #ffee0087;
          }
          .self-portrait {
            max-height: 7.1vh;
            object-fit: contain;
            margin-top: 1vh;
            margin-left: 5vw;
            transition: .6s transform ease-out;
          }
          .self-portrait:hover {
            transform: rotateY(180deg);
          }
          .self-portrait:active {
            transform: rotateX(180deg);
          }
          @keyframes become-opaque {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes become-transparent {
            from {
              opacity: .8;
            }
            to {
              opacity: 0;
            }
          }
          `}</style>
        <div className={this.state.navOpacityFull ? 'sidebar-links-container-on' : 'sidebar-links-container-off'}>
          <div>
            <div className="nav-link-sidebar" onClick={(e) => scrollToTop()}>
              <img className="self-portrait" src={logo} alt="Kevin Boyle" title="Back to Top"/>
            </div>
          </div>
          <div className="nav-links-right">
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
      </div>
    );
  }
}

export default Nav;
