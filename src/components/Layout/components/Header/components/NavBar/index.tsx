import { FC } from "react";
import { Bell, ArrowLeft, Grid3x3GapFill, PersonX, Search } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import avatar from "../../../../../../assets/img/avatar.gri.jpeg";
import { DropdownButton, Dropdown, Nav, Navbar, Form, FormControl, InputGroup, Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useAuth } from '../../../../../../hooks';


const NavBar: FC = () => {
    const { goBack } = useHistory();
    const [t, i18n] = useTranslation("global");
    const { logout } = useAuth()

    return (
        <Nav className="navbar-expand-lg navbar-light">
            <Container fluid>
                <Navbar.Collapse id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 me-3">
                        <li>
                            <button className="btn" onClick={goBack}>
                                <ArrowLeft />
                            </button>
                        </li>
                    </ul>
                    <Form className="d-flex">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                <Search />
                            </InputGroup.Text>
                            <FormControl type="text" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                            <button className="btn btn-search shadow" type="submit">
                                {t("navbar.Search")}
                            </button>
                        </InputGroup >
                        <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                    </Form>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
                        <DropdownButton variant="bg-none" title="Language">
                            <Dropdown.Item onClick={() => i18n.changeLanguage("es")} href="#/action-2">🇪🇸 &nbsp; SPANISH</Dropdown.Item>
                            <Dropdown.Item onClick={() => i18n.changeLanguage('en')} href="#/action-1">🇬🇧 &nbsp; ENGLISH</Dropdown.Item>
                        </DropdownButton>
                        <Nav.Item>
                            <Nav.Link aria-current="page" href="/">
                                <Bell />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">
                                <Grid3x3GapFill />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/logout">
                                <PersonX className="PersonX" onClick={logout} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <img src={avatar} alt="user-avatar" width="32" className="rounded-circle ms-1 me-2" />
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul className="navbar-nav">
                                            <Nav.Item className="dropdown">
                                                <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Griselda De Lio
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                                    <Dropdown.Item href="https://github.com/griseldadelio">  Github</Dropdown.Item >
                                                    <Dropdown.Item href="https://www.linkedin.com/in/griseldadelio"> Linkedin</Dropdown.Item >
                                                    <hr className="dropdown-divider" />
                                                    <Dropdown.Item href="#Footer"> {t("navbar.Contact")}</Dropdown.Item >
                                                </ul>
                                            </Nav.Item>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </Nav.Item>
                    </ul>
                </Navbar.Collapse>
            </Container >
        </Nav >
    );
};

export { NavBar };