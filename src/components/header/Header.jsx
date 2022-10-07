import React from 'react'
import ME from '../../assets/me.png'
import './header.css'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import Hamburger from './hamburger/Hamburger'

const Header = () => {
  return (
    <header>
        <div className="header__top">
            <h2 className="logo__text">TAHOUR<span>Dev</span></h2>
            <ul className="header__menu">
                <li><a href="#">Home</a></li>
                <li><a href="#social">Social</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <Hamburger />
        </div>
        <div className="container header__container-hero">
            <div className="header__container-text">    
                <h2>I'm Heng Keanghor<br/>
                I'm a <span>Web Frontend Developer</span></h2>
                <div className="button">
                    <a href="#contact" className="btn">Hire me!</a>
                    <a href="#" className="btn btn-primary">Resume</a>
                </div>
            </div>
            <div className="header__image">
                <div className="linear__transparent"></div>
                <img src={ME} alt="" />
            </div>
            <a href="#contact" className='header__icon'><BsFillArrowUpSquareFill /></a>
        </div>
    </header>
  )
}

export default Header