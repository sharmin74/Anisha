import React, {useState} from 'react'
import './Header.css';
import logo from './logo.jpg'
// import Typical from 'react-typical'


function Header() {
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);
    function showButton(){
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);
    function changeBg(){
        if(window.scrollY >= 100){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBg)
    return (
        <div className='bg__div'>
            <div className={navbar ? 'header active': 'header' }>
                <div className='header__logoDiv'>
                <img className='header__logo' src={logo} alt="img" />
                </div>
                <div className='header__nav'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Me</a></li>
                        <li><a href="/">My Work</a></li>
                        <li><a href="/">Contact Me</a></li>
                    </ul>
                </div>
            </div>
            <div className='caption'>
                <h1>Digital Art and Photography.</h1>
                <p>
                        {/* <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                            'I make digital art.',
                            1500,
                            'I am also a phtographer.',
                            1500
                        ]}
                    /> */}
                </p>
            </div>
        </div>
    )
}

export default Header;
