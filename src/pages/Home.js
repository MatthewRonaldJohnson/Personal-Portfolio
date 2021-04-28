import ProjectCard from "../components/ProjectCard"
import projectsArr from "../projects.json";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container-lg my-3">
            <section className="bio">
                <h3>Projects</h3>
                <p>
                    Thanks for visiting my portfolio. I'm Matthew Johnson a full stack web developer. Below are a few of the projects I've worked on. This website was built using React and Bootstrap.
                </p>
                <p>
                    Please also check out the <Link to="about">about me</Link> and <Link to="contact">contact</Link> pages to read more about me and to get in touch.
                </p>
            </section>
            <section className="projects row">
                {projectsArr.map(project => {
                    return <ProjectCard 
                                key={project.id}
                                title={project.title}
                                writeUp={project.writeUp}
                                img={project.img}
                                deployed={project.deployed}
                                github={project.github}/>
                })}
            </section>
        </div>
    )
}
