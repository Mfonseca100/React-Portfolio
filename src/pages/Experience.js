import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#302f2abf">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#628a4b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Stephen F. Austin High School
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#628a4b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           San Jacinto College, Houston Texas
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associates Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February - August"
          iconStyle={{ background: "#628a4b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Rice University Coding Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Fullstack Flex Web Development Certificate
          </h4>

          <p> A 12-week, full-time web development boot camp. The full stack curriculum included HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, React.js, databases, MongoDB, Node.js, MySQL, Command Line, Git, and more.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Current"
          iconStyle={{ background: "#628a4b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Marketing Lead - Z Pediatric Dentistry
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Houston, Texas
          </h4>
          <p>Managed social media content and organized events to boost patient engagement and increase our patient base.</p>
        </VerticalTimelineElement>
        

      </VerticalTimeline>
    </div>
  );
}

export default Experience;