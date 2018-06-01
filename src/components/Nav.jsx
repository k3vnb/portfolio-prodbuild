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
            top: 10%;
            left: 2%;
          }
          .sidebar-links-container-off {
            height: 40vh;
            width: 10vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            opacity: 0;
            animation: become-transparent .2s;
          }
          .sidebar-links-container-on {
            height: 40vh;
            width: 10vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            animation: become-opaque 1.8s;
          }
          .nav-link-sidebar {
            text-shadow: .2px .2px 0px #ffffff38;
            color: orange;
            font-family: 'Carrois Gothic SC', sans-serif;
            padding: 5%;
            font-size: 2vw;
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
}

export default Nav;
