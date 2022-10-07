import React from "react";
import "./contact.css";
import cat from "../../assets/cat.svg";
const Contact = () => {
  return (
    <section id="contact">
      <div className="image__bg"></div>
      <div className="container contact__container">
        <form action="">
          <h4 htmlFor="name">Name</h4>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Enter Your Full Name"
            required
          />
          <h4 htmlFor="phoneNumber">Phone Number</h4>
          <input
            type="text"
            name=""
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
            required
          />
          <h4 htmlFor="email">Email</h4>
          <input
            type="text"
            name=""
            id="email"
            placeholder="Enter Your Valid Email"
            required
          />
          <h4 htmlFor="message">Message</h4>
          <textarea
            name="message"
            id=""
            cols="30"
            rows={5}
            placeholder="Type your message here"
          ></textarea>
          <button className="btn__contact">Submit</button>
        </form>
        <div className="reach__me">
          <h3>Reach Me</h3>
          <small>Email: tahourdev@gmail.com</small>
          <small>Phone: +85517607329</small>
          <small>
            Address: Sankat Chey Chumneah, Khna Doun Penh, Phnom Penh
          </small>
        </div>
      </div>
    </section>
  );
};

export default Contact;
