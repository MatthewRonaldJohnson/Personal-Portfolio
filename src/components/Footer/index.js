import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top container-fluid">
            <div className="text-center">
                Built by Matthew Johnson © 2021
            </div>
            <div className="text-center">
                <div className="text-center">
                    <a className="mx-2" href="https://github.com/MatthewRonaldJohnson" target="__blank">
                        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
                    </a>
                    <a className="mx-2" href="https://www.linkedin.com/in/matthewronaldjohnson/" target="__blank">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    </a>
                </div>
            </div>
        </footer>
    )
}