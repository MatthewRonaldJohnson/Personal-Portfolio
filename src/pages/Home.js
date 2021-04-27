import ProjectCard from "../components/ProjectCard"
import projectsArr from "../projects.json";

export default function Home() {
    return (
        <div className="container-fluid my-3">
            <section className="bio">
                <h3>Bio</h3>
                <p>
                    This is my bio which I will fill out soon. It is just a short paragraph describing myself and what I am looking for.
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
