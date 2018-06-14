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
      <div className="topbar">
        <style jsx>{`
          .topbar {
            position: fixed;
            top: -.5%;
            left: 0%;
            width: 100%;
            background-color: white;
            border-bottom: .5px solid #ffa90e8c;
            height: 7.8vh;
          }
          .topbar-links-container-off {
            height: 100%;
            width: 80%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            opacity: 0;
            -webkit-animation: become-transparent .2s;
                    animation: become-transparent .2s;
            margin-left: 5%;
          }
          .topbar-links-container-on {
            height: 100%;
            width: 80%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-animation: become-opaque 2s;
                    animation: become-opaque 2s;
            margin-left: 5%;
          }
          .nav-links-right {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            width: 35%;
            margin-left: 5%;
          }
          .nav-link-topbar {
            color: #4c4943;
            font-family: 'Carrois Gothic SC', sans-serif;
            font-size: 2vw;
            -webkit-transition: text-shadow .1s;
            -o-transition: text-shadow .1s;
            transition: text-shadow .1s;
          }
          .nav-link-topbar:hover {
            cursor: pointer;
            -webkit-transform: scale(1.015);
                -ms-transform: scale(1.015);
                    transform: scale(1.015);
            text-shadow: .5px .5px 0px #0202029c;
          }
          .nav-link-topbar:active {
            -webkit-transform: scale(1.025);
                -ms-transform: scale(1.025);
                    transform: scale(1.025);
            text-shadow: 0px 1px 5px #ffee0087;
          }
          .self-portrait {
            max-height: 7.1vh;
            -o-object-fit: contain;
               object-fit: contain;
            margin-top: 1vh;
            margin-left: 5vw;
            -webkit-transition: .6s transform ease-out;
            -o-transition: .6s transform ease-out;
            transition: .6s transform ease-out;
          }
          .self-portrait:hover {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
          }
          .self-portrait:active {
            -webkit-transform: rotateX(180deg);
                    transform: rotateX(180deg);
          }
          @-webkit-keyframes become-opaque {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes become-opaque {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-webkit-keyframes become-transparent {
            from {
              opacity: .8;
            }
            to {
              opacity: 0;
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
          @media screen and (max-width: 500px){
            .nav-link-topbar {
              font-size: 12px;
            }
            .nav-links-right {
              width: 65%;
            }
          }
          `}</style>
        <div className={this.state.navOpacityFull ? 'topbar-links-container-on' : 'topbar-links-container-off'}>
          <div>
            <div className="nav-link-topbar" onClick={() => scrollToTop()}>
              <img className="self-portrait" src={logo} alt="Kevin Boyle" title="Back to Top"/>
            </div>
          </div>
          <div className="nav-links-right">
            <div className="nav-link-topbar" onClick={() => scrollToPage('.about-container')}>
              About
            </div>
            <div className="nav-link-topbar" onClick={() => scrollToPage('.gallery-container')}>
              Gallery
            </div>
            <div className="nav-link-topbar" onClick={() => scrollToPage('.contact-container')}>
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
