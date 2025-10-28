import React from "react";
import { MdOutlineSchool as SchoolIcon } from "react-icons/md";
import { MdWorkOutline as WorkIcon } from "react-icons/md";
import { timelineElements } from "../data";
import "../templates.js/timeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  let workIconStyles = { background: "#2563eb" };
  let schoolIconStyles = { background: "#2563eb" };

  return (
    <section id="experience">
      <h2>Education & Experience</h2>
      <VerticalTimeline className=" timeline__container">
        <div className="container">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="title vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h2 className="location vertical-timeline-element-subtitle">
                  {element.location}
                </h2>
                <p id="description">{element.descreption}</p>
                {element.link && (
                  <a 
                    href={element.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {element.linkText || "View Project"}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </div>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
