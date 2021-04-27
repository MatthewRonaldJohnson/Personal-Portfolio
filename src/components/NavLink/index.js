import { Link, useLocation } from "react-router-dom";

export default function NavLink(props) {
    const location = useLocation();

    return (
        <li className="nav-item">
            <Link
                to={props.address}
                className={location.pathname === props.address ? "nav-link active" : "nav-link"}>
                {props.title}
            </Link>
        </li>
    )
}