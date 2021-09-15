import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectData from './ProjectData/ProjectData';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState(ProjectData)
    console.log(projects);
    console.log(setProjects);

    // const handleFilterCategory = (CategoryName) => {
    //     const new_array = ProjectData.filter(project => project.category.includes(CategoryName))
    //     setProjects(new_array);
    // }
    return (
        <div id="projects" >
            <h2 className="text-center title-nam ">Our Events</h2>
           
                <div className="row title">
                    {
                        projects.map(projects => <ProjectCard key={projects.name} projects={projects}></ProjectCard>)
                    }
                </div>
           
        </div>
    );
};

export default Projects;