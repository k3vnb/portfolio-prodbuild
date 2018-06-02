import React from 'react';
import portraitNav from '../assets/images/portrait-nav.png';



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
    console.log('makeOpaque');
    if (document.documentElement.scrollTop > 400) {
      console.log('yep');
      this.setState({navOpacityFull: true});
      console.log(this.state);
    } else {
      this.setState({navOpacityFull: false});
      console.log(this.state);
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
            width: 110%;
            background-color: #fffffff0;
            border-bottom: .5px solid #ffa90e8c;
          }
          .sidebar-links-container-off {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 0;
            animation: become-transparent .2s;
            margin-left: 5%;
          }
          .sidebar-links-container-on {
            height: 12.8vh;
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation: become-opaque 1.8s;
            margin-left: 5%;
          }
          .nav-links-right {
            display: flex;
          }
          .nav-link-sidebar {
            color: #4c4943;
            font-family: 'Carrois Gothic SC', sans-serif;
            padding: 5%;
            font-size: 2vw;
            transition: text-shadow .1s;
          }
          .nav-link-sidebar:hover {
            cursor: pointer;
            transform: scale(1.015);
            text-shadow: .5px .5px 0px #0202029c;
          }
          .self-portrait {
            max-height: 11.4vh;
            object-fit: contain;
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
              <img className="self-portrait" src={portraitNav} alt="Kevin Boyle" title="Back to Top"/>
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
