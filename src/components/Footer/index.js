import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <a href="https://github.com/MatthewRonaldJohnson" target="__blank">
                <FontAwesomeIcon icon={faGithubSquare} size="6x" />
            </a>
            <a href="https://www.linkedin.com/in/matthewronaldjohnson/" target="__blank">
                <FontAwesomeIcon icon={faLinkedin} size="6x" />
            </a>
        </footer>
    )
}