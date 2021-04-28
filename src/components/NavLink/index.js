import { Link, useLocation } from "react-router-dom";

export default function NavLink(props) {
    const location = useLocation();

    return (
        <li className="nav-item">
            <Link
                to={props.address}
                className={`nav-link ${location.pathname === props.address ? "active" : ""}`}>
                {props.title}
            </Link>
        </li>
    )
}