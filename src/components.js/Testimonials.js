import React, { useState } from "react";
import { testmonials } from "../data";
import "../templates.js/testimonials.css";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowDroprightCircle as Next } from "react-icons/io";
import { IoIosArrowDropleftCircle as Back } from "react-icons/io";

const Testimonials = () => {
  const [currentId, setCurrentId] = useState(1);
  // const [activeClass,setActiveClass] = useState(1)

  const currentItem = testmonials.find((item) => item.id === currentId);
  const { id, name, image, review } = currentItem;

  const nextItem = () => {
    if (currentId > testmonials.length - 1) {
      return setCurrentId(1);
    }
    return setCurrentId(currentId + 1);
  };

  const prevItem = () => {
    if (currentId < 2) {
      return setCurrentId(testmonials.length);
    }
    return setCurrentId(currentId - 1);
  };

  return (
    <section id="testimonials">
      <h2>Languages</h2>
      <div className="container tests__container">
        <button onClick={prevItem} className="arrow__btn">
          <Back />
        </button>
        {
          <article key={id} className="testimonial">
            <div className="user__avatar">
              <img src={image} alt="image" />
            </div>
            <h5 className="user__name">{name}</h5>
            <small className="user__review">{review}</small>
          </article>
        }
        <div className="circles">
          {testmonials.map((circle) => {
            return <div className={currentId === circle.id && "active"}></div>;
          })}
        </div>
        <button onClick={nextItem} className="arrow__btn">
          <Next />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
