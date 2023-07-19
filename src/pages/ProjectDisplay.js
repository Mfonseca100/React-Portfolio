import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Projects.css";
import IconButton from "@material-ui/core/IconButton";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const { name, image, skills, githubLink } = project;
    
    
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <IconButton
        component="a"
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
            <GitHubIcon />
            </IconButton>
        </div>
    );
}

export default ProjectDisplay;