import React from 'react';


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
            top: -2%;
            left: 0%;
            width: 100%;
            background-color: #ffffffcf;
          }
          .sidebar-links-container-off {
            width: 100%;
            display: flex;
            justify-content: space-around;
            opacity: 0;
            animation: become-transparent .2s;
          }
          .sidebar-links-container-on {
            height: 10vh;
            width: 100%;
            display: flex;
            justify-content: space-around;
            animation: become-opaque 1.8s;
          }
          .nav-link-sidebar {
            color: orange;
            font-family: 'Carrois Gothic SC', sans-serif;
            padding: 5%;
            font-size: 3vw;
            transition: text-shadow .1s;
          }
          .nav-link-sidebar:hover {
            cursor: pointer;
            transform: scale(1.015);
            text-shadow: .5px .5px 1px #0202029c;
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
          <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.about-container')}>
                About
          </div>
          <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.gallery-container')}>
                Gallery
          </div>
          <div className="nav-link-sidebar" onClick={(e) => scrollToPage('.contact-container')}>
                Contact
          </div>
          <div className="nav-link-sidebar" onClick={(e) => scrollToTop()}>
            Back to top
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
