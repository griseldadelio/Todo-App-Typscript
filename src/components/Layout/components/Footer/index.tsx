import { FC } from 'react';
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: FC = () => {
    return (
        <footer className="footer" id="Footer">
            <div className="d-flex m-3">
                <div className="text-start pt-2 w-100 ">
                    <b> De Lio Griselda &nbsp; {new Date().getFullYear()}</b>
                </div>
                <div className="flex-shrink-1 me-2">
                    <Link className="size" to={"https://github.com/griseldadelio"}><i className="bi bi-github"></i></Link>
                </div>
                <div className="flex-shrink-1 me-2">
                    <Link className="size" to={"www.linkedin.com/in/griseldadelio"}><i className="bi bi-linkedin"></i></Link>
                </div>
                <div className="flex-shrink-1 me-2">
                    <Link className="size" to={"https://api.whatsapp.com/send?phone=5491154057431"}><i className="bi bi-whatsapp"></i></Link>
                </div>
                <div className="flex-shrink-1 me-4">
                    <Link className="size" to={"mailto:griseldadelio@gmail.com"}><i className="bi bi-envelope-fill"></i></Link>
                </div>
            </div>
        </footer>
    )
}

export { Footer }