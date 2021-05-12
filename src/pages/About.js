import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="container-lg my-3">

            <h3>About Me</h3>
            <div className="w-25 h-25">
            <img className="img-thumbnail" src="./assets/MatthewJohnsonProfile.jpg" alt="Matthew Johnson"/>

            </div>
            <p>
                I'm Matthew Johnson a Full Stack Web Developer applying love of problem solving and collaboration to build exciting applications for the web. I've recently earned a certificate in Full Stack Web Development from the University of Arizona Coding Boot Camp. Strengths in teamwork, problem solving, and being adaptable.
            </p>
            <p>
                I rely on my strong JavaScript fundamentals to quickly learn and inplement different technologies into my projects. I have worked with React, jQuery, Express, Node, Handlebars, Bootstrap, Sequelize, Mongoose, CHart.js, and Auth0 to build projects. Currently I am very interested in PWAs to create powerful web applications that feel like native apps on a variety of platforms. 
            </p>
            <p>
                Looking for opportunites to apply my problem solving skills to tackle new challenges and continued learning. Please visit the <Link to="contact">contact page</Link>  if you wish to reach me.
            </p>
        </div>
    )
}
