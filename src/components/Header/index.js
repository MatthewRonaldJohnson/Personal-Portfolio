import NavLink from "../NavLink"

export default function Header(){

    return (
        <header>
            <h1>Matthew Johnson</h1>
            <nav>
                <ul className="nav nav-tabs">
                    <NavLink title="Home" address="/" />
                    <NavLink title="About" address="/about" />
                    <NavLink title="Contact" address="/contact" />
                </ul>
            </nav>
        </header>
    )
}