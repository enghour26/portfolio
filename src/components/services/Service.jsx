import React from 'react'
import uxui from '../../assets/uxui.png'
import wbedev from '../../assets/wbedev.jpg'
import webdes from '../../assets/webdes.jpg'
import './service.css'
const Service = () => {
  return (
    <section id='service'>
        <div className="container service__container">
        <h4 className='title'>We Offer</h4>
            <div className="service__cards">
                <article className="service__card">
                    <div className="service__card-image">
                    <img src={uxui} alt="" />
                    </div>
                    <h4>Web Modification</h4>
                </article>
                <article className="service__card">
                    <div className="service__card-image">
                    <img src={wbedev} alt="" />
                    </div>
                    <h4>Web Development</h4>
                </article>
                <article className="service__card end">
                    <div className="service__card-image">
                    <img src={webdes} alt="" />
                    </div>
                    <h4>Web Design</h4>
                </article>
            </div>
            </div>
    </section>
  )
}

export default Service