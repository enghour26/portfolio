import React from 'react'
import './social.css'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
const Social = () => {
  return (
    <section id='social'>
      <div className="container social__container">
        <article className="social__card">
          <h3><BsFacebook className='social__icon'/>facebook</h3>
          <p>I'm available in facebook, so feel free to contact me through facebook</p>
          <a href="" className="btn btn-primary">Facebook</a>
        </article>
        <article className="social__card">
          <h3><BsGithub className='social__icon'/>Github</h3>
          <p>If you have Github you can follow me to see my project on Github</p>
          <a href="" className="btn btn-primary">Github</a>
        </article>
        <article className="social__card">
          <h3><AiOutlineInstagram className='social__icon'/>Instagram</h3>
          <p>I'm available in Instagram so feel free to contact me through Instagram</p>
          <a href="" className="btn btn-primary">Instagram</a>
        </article>
      </div>
    </section>
  )
}

export default Social