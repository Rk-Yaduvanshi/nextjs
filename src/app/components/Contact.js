"use client";
import React from 'react';
import Faq from './Faq';

const Contact = () => {
  return (
    <div>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage: "url('./assets/images/contact/contact-banner.webp')",
        }}
      >
        <div className="breadcrumb-container">
          <span className="page-name">Contact us</span>
        </div>
      </div>

      <section id="get-in-touch" className="get-in-touch section-padding">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-center">
                <div className="section-title">
                  <h2 className="title2">Get in touch</h2>
                </div>
                <p>For Any Query Contact us</p>
              </div>
              <form
                id="contact-form"
                name="contact-form"
                className="aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Name" />
                    <span className="error_field" id="name_error"></span>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
                    <span className="error_field" id="email_error"></span>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="phone">Phone No.</label>
                    <div className="flex-number">
                      <p className="mb-0">+91</p>
                      <input type="text" className="form-control" name="phone" id="phone" placeholder="0000000000" />
                    </div>
                    <span className="error_field" id="phone_error"></span>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" name="city" id="city" placeholder="Your City" />
                    <span className="error_field" id="city_error"></span>
                  </div>
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <label htmlFor="course">Select Course</label>
                    <select name="course" id="course" className="form-select">
                      <option value="" disabled selected>
                        Select Course
                      </option>
                      <option value="04 Weeks Professional Hair Styling Course">04 Weeks Professional Hair Styling Course</option>
                      <option value="06 Weeks Bridal Makeup And Hair Styling Course">06 Weeks Bridal Makeup And Hair Styling Course</option>
                      <option value="08 Weeks Professional Makeup And Hair Styling Course">08 Weeks Professional Makeup And Hair Styling Course</option>
                      <option value="Personal Grooming Course">Personal Grooming Course</option>
                      <option value="Weekend Professional Makeup And Hair Styling Course">Weekend Professional Makeup And Hair Styling Course</option>
                    </select>
                    <span className="error_field" id="course_error"></span>
                  </div>
                </div>
                <div className="custom-btn text-center mb-20">
                  <button className="btn-style" type="submit" id="send">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6">
              <iframe
                title="Glamblush Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.086227116282!2d72.8414336!3d19.183338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb647dd47ec4bb70!2sGlamBlush+Best+Makeup+Academy+In+Mumbai!5e0!3m2!1sen!2sin!4v1514897518524"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Faq/>
      <section id="contact" className="contact section-padding">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="section-title">
          <h2 className="title2">Contact us</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="info-box">
          <i className="ti-email"></i>
          <h3>Email</h3>
          <p>info@glamblush.in</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="info-box">
          <i className="ti-mobile"></i>
          <h3>Phone</h3>
          <p>+91 9167263001</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="info-box mb-0">
          <i className="ti-location-pin"></i>
          <h3>Office</h3>
          <p className="add">
            1132/1099, Rustomjee Eaze Zone Mall, Vasari Hill Road, Sunder Nagar, Malad (W),
            Opposite Noble Chemist, Near Goregaon MTNL Telephone Exchange, Mumbai, Maharashtra - 400064.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div
  id="footer"
  className="footer-section background-image"
  style={{
    background: "url('./assets/images/cta-section.webp') center center",
    backgroundSize: "cover",
  }}
>
  <div className="left-fade"></div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="wrap-text text-center">
          <h2 className="glamblush-heading">
            Craft Your Future In Makeup Artistry At Mumbai Top Makeup&apos;s Academy
          </h2>
          <div className="custom-btn">
            <a
              className="btn-style"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=919167263001"
            >
              Enquiry Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;
