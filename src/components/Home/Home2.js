import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            MAS PRIMEIRO, DEIXE{" "}
                            <span className="purple"> EU ME APRESENTAR </span>{" "}
                            PARA VOCÊ
                        </h1>
                        <p className="home-about-body">
                            Sou brasiliense, tenho 23 anos. Desde muito jovem,
                            sempre tive facilidade e proximidade a área da
                            Tecnologia, e aos 11 anos entrei em meu primeiro
                            cursinho de Informática. Mal sabia eu, que ali era o{" "}
                            <em>start</em> de um sonho!
                            <br />
                            <br />
                            Estou estudando a Linguagem de Programação
                            <b className="purple"> JAVASCRIPT. </b>
                            <br />
                            <br />
                            Sou estudante de Análise e Desenvolvimento de
                            Sistemas, e tenho focado meus estudos no &nbsp;
                            <b className="purple">DESENVOLVIMENTO FRONTEND.</b>
                            <br />
                            <br />
                            Atualmente tenho estudado e me aperfeiçoado em
                            <b className="purple">
                                {" "}
                                HTML, CSS, JAVASCRIPT, REACT JS, ANGULAR E VUE.
                            </b>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>VAMOS CONVERSAR</h1>
                        <p>
                            Sinta-se livre para entrar em{" "}
                            <span className="purple">contato </span>comigo
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/mguilherm"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/marcos-guilherme-barbosa-da-silva/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/mguilherm/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
