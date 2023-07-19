import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, githubLink }) {
    const navigate = useNavigate();

    const handleClick = () => {
        window.open(githubLink, "_blank"); 
      };
    

    return (
        <div
            className="projectItem"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem;