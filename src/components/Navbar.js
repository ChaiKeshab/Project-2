// import React, { useEffect, useState } from 'react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import menu from '../Images/menu.svg';
import exit from '../Images/exit.svg';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';
import './Navbar.css'
// impt

// rcc (react-class-component)
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      theme: 'darkMode',
      blur: '',
      hamBar: false,
    };
  }

  componentDidMount() {
    this.updateBodyClass();
  }

  componentDidUpdate() {
    this.updateBodyClass();
  }

  updateBodyClass() {
    const { theme, blur } = this.state;

    document.body.classList.toggle('blur', !!blur);
    document.body.classList.toggle('darkMode', theme === 'darkMode');
    document.body.classList.toggle('lightMode', theme === 'lightMode');
  }

  toggleMode() {
    if (this.state.theme === 'darkMode') {
      this.setState({ theme: 'lightMode', mode: false });
    } else if (this.state.theme === 'lightMode') {
      this.setState({ theme: 'darkMode', mode: true });
    }
  }

  toggleHambar() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (this.state.blur === '') {
        this.setState({ hamBar: true, blur: 'blur' });
      } else if (this.state.blur === 'blur') {
        this.setState({ hamBar: false, blur: '' });
      }
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="container-navbar">
          <div className="logo-container">

            <Link to="/" className="logo">{this.props.title}<span>{this.props.spanTitle}</span></Link>
          </div>
          <img id="mobile-cta" className={`mobile-menu ${this.state.hamBar ? 'hide' : 'show'}`} src={menu} alt="Open Navigation" onClick={() => this.toggleHambar()} />

          <nav>
            <img id="mobile-exit" className={`mobile-menu-exit ${this.state.hamBar ? 'show' : 'hide'}`} src={exit} alt="Close Navigation" onClick={() => this.toggleHambar()} />

            <ul className={`primary-nav ${this.state.hamBar ? 'show' : 'hide'}`}>

              <li><Link to="/About" onClick={() => this.toggleHambar()} className={`${this.state.hamBar ? 'hide' : 'show'}`}>About</Link></li>
              <li><Link to="/Projects" onClick={() => this.toggleHambar()} className={`${this.state.hamBar ? 'hide' : 'show'}`}>Projects</Link></li>
              <li className='resume-list'><a className='resume' href='/' target='_blank' rel='noreferrer'>Resume</a></li>

              <li><img className={`sun ${this.state.mode ? 'show' : 'hide'}`} onClick={() => this.toggleMode()} src={sun} alt="Dark Mode" /></li>
              <li><img className={`moon ${this.state.mode ? 'hide' : 'show'}`} onClick={() => this.toggleMode()} src={moon} alt="Light Mode" /></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}



// export default function Navbar(this.props) {
//   //------------------------------------darkMode------------------------------------
//   const [mode, setMode] = useState('false')
//   const [theme, setTheme] = useState('darkMode')
//   const [blur, setBlur] = useState('')

//   function toggleMode() {
//     if (theme === 'darkMode') {
//       setTheme('lightMode')
//       setMode(false)

//     }
//     if (theme === 'lightMode') {
//       setTheme('darkMode')
//       setMode(true)
//     }
//   }

  // useEffect(() => {
  //   document.body.classList.toggle('blur', !!blur);
  //   document.body.classList.toggle('darkMode', theme === 'darkMode');
  //   document.body.classList.toggle('lightMode', theme === 'lightMode');
  // }, [theme, blur]);

//   //------------------------------------menuToggle------------------------------------
//   const [hamBar, setHamBar] = useState(false)
//   function toggleHambar() {

//     if (window.matchMedia('(max-width: 767px)').matches) {
//       if (blur === '') {
//         setHamBar(true)
//         setBlur('blur')
//       }

//       if (blur === 'blur') {
//         setHamBar(false)
//         setBlur('')
//       }
//     }
//   }

//   return (
//     <div>Navbar</div>
//   )
// }
