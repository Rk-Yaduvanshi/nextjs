import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image"; // Import Image from Next.js

const Page = () => { // Changed 'page' to 'Page'
  useEffect(() => {
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const filterableCards = document.querySelectorAll(
      "#filterable-cards .card"
    );

    const filterCards = (e) => {
      document
        .querySelector("#filter-buttons .active")
        .classList.remove("active");
      e.target.classList.add("active");

      filterableCards.forEach((card) => {
        if (
          card.dataset.name === e.target.dataset.filter ||
          e.target.dataset.filter === "all"
        ) {
          card.classList.replace("hide", "show");
        } else {
          card.classList.add("hide");
        }
      });
    };

    const bridalLookButton = document.querySelector(
      "[data-filter='bridal-look']"
    );
    bridalLookButton.classList.add("active");
    filterCards({ target: bridalLookButton });

    filterButtons.forEach((button) =>
      button.addEventListener("click", filterCards)
    );

    Fancybox.bind("[data-fancybox='images']", {
      loop: true,
      buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
    });

    return () => {
      filterButtons.forEach((button) =>
        button.removeEventListener("click", filterCards)
      );
      Fancybox.destroy();
    };
  }, []);

  return (
    <div>
      <div className="breadcrumb-section" style={{
        backgroundImage: "url('./assets/images/gallery/gallery-banner.webp')",
      }}>
        <div className="breadcrumb-container">
          <span className="page-name">Gallery</span>
        </div>
      </div>
      
      <div className="section-padding gallery-filter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">Gallery</h2>
              </div>
              <p>
                Our gallery showcases the incredible talent and creativity of our
                students. From stunning transformations to avant-garde looks, get
                inspired by the artistry that flourishes within the walls of our
                makeup institute in Mumbai, showcasing why we are considered the
                best makeup academy in Mumbai and beyond.
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center" id="filter-buttons">
            <button className="btn mb-2 mx-1 active" data-filter="bridal-look">
              Bridal Look
            </button>
            <button className="btn mb-2 mx-1" data-filter="celebrity-look">
              Celebrity Look
            </button>
            <button className="btn mb-2 mx-1" data-filter="student-work">
              Student Work
            </button>
          </div>

          <div className="row glamblush-photos px-2 mt-4 gap-3" id="filterable-cards">
            {/* Bridal Look */}
            <div className="card p-0" data-name="bridal-look">
              <a className="d-block glamblush-photo-item" data-fancybox="images"
                href="/assets/images/home-images/gallery/bridal-look/1b.webp">
                <Image className="img-fluid" src="/assets/images/home-images/gallery/bridal-look/1.webp"
                  alt="Bridal Look 1" width={600} height={400} />
              </a>
            </div>
            {/* Add more cards here */}
            <div className="card p-0" data-name="student-work">
              <a className="d-block glamblush-photo-item" data-fancybox="images"
                href="/assets/images/home-images/gallery/student-work/1b.webp">
                <Image className="img-fluid" src="/assets/images/home-images/gallery/student-work/1.webp"
                  alt="Student Work 1" width={600} height={400} />
              </a>
            </div>
            {/* Add more cards for other categories as needed */}
          </div>

          <div className="custom-btn text-center mt20">
            <a className="btn-style" href="gallery.php">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page; // Exported the component with the new name
