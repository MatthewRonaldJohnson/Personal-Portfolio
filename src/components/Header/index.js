import NavLink from "../NavLink"

export default function Header(){

    return (
        <header>
            <h1>Matthew Johnson</h1>
            <nav>
                <ul className="nav nav-tabs">
                    <NavLink title="Projects" address="/" />
                    <NavLink title="About" address="/about" />
                    <NavLink title="Contact" address="/contact" />
                    <li className="nav-item">
                        <a className="nav-link" target="__blank" href="./assets/Resume.pdf">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}