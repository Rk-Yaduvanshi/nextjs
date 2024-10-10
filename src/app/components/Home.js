"use client"; // Make it a client component

import React from "react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link for navigation // Make sure you import the Image component
import Counter from "./Counter";
import Slider from "./Slider";

const Home = () => {
  const founderImage = "/assets/images/home-images/founder/founder.webp"; // Assuming the banner is stored here
  return (
    <div>
      <div id="home">
        <div className="glamblush-hero">
          <div className="hero-content">
            <ul className="slides">
              <li
                className="bg-fixed"
                style={{
                  backgroundImage:
                    "url(/assets/images/home-images/hero/banner.webp)",
                }} // Use a relative path
              >
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="mx-auto frame-inner">
                          <h2>
                            Becom a Certified Makeup & Hairstyling Expert with
                            our Industry-Centric Courses
                          </h2>
                          <div className="enroll-now-btn">
                            <Link
                              href="https://api.whatsapp.com/send/?phone=919167263001"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Enroll Now</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-video">
          <div className="video-container">
            <Image
              className="video-placeholder mobile-placeholder img-fluid"
              src="/assets/images/home-images/video-bg2.webp" // Use a relative path
              width={360}
              height={592}
              alt="Video Thumbnail"
            />
            <div className="video-embed" data-video-id="szQuOmwt7Ro"></div>
            <div className="mobile-play-btn">
              <i className="fa fa-play play-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <Counter />
      <Slider />

      <div className="section-padding glamblush-awards">
        <div className="container">
          <div className="row align-items-stretch glamblush-photos">
            <div className="col-12">
              <div className="row align-items-stretch">
                {/* Award 1 */}
                <div
                  className="col-md-3 animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/hands-on-training.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Hands on Training"
                    />
                    <h1>Hands on Training</h1>
                  </div>
                </div>

                {/* Award 2 */}
                <div
                  className="col-md-3 animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/international-certificate.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="International Certificate on Course Completion"
                    />
                    <h1>International Certificate on Course Completion</h1>
                  </div>
                </div>

                {/* Award 3 */}
                <div
                  className="col-md-3 animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/guidance-on-placements.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Guidance on Placements"
                    />
                    <h1>Guidance on Placements</h1>
                  </div>
                </div>

                {/* Award 4 */}
                <div
                  className="col-md-3 animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/guaranteed-internship.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Guaranteed Internship"
                    />
                    <h1>Guaranteed Internship</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="our-founder"
        className="section-banner background-image main-bg-color"
        style={{
          background: `url(${founderImage}) center center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-mobile-none">
              <div className="about-img">
                <Image
                  src="/assets/images/home-images/founder/founder-mobile.webp"
                  alt="Founder"
                  width={370}
                  height={370}
                  className="img-fluid"
                  priority
                />
              </div>
            </div>

            <div className="offset-md-6 col-md-6">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">Our Founder</h2>
                </div>
                <div className="heading-meta">Vishakha Verma</div>
                <p>
                  Vishakha Verma is renowned as one of the best makeup artists
                  in Mumbai, with a rich experience spanning over 10 years.
                  Having honed her skills at prestigious academies across the
                  globe, including the London School of Makeup Dubai, Delmar
                  Makeup Academy London, Marvie and Beck, and Farouk Shamratov
                  Hair, Vishaka stands out for her expertise and dedication to
                  her craft.
                </p>
                <p className="mb-0">
                  As the founder of one of the leading makeup academies in
                  Mumbai, Vishaka&apos;s mission is to groom aspiring makeup
                  artists into professionals of the highest caliber. With over
                  10 years of hands-on experience, she firmly believes in
                  providing her students with real-world learning opportunities.
                  Vishaka actively involves her students in the latest client
                  projects, ranging from high-fashion shoots to bridal makeup,
                  ensuring they receive practical exposure and invaluable
                  insights into the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
