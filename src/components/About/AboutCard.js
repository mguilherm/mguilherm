import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Fala pessoal, eu me chamo{" "}
                        <span className="purple">Marcos Guilherme </span>
                        sou natural de{" "}
                        <span className="purple"> Brasília, Brasil.</span>
                        <br />
                        Sou um estudante de Análise e Desenvolvimento de
                        Sistemas, com anseio de me tornar um Desenvolvedor
                        FrontEnd.
                        <br />
                        <br />
                        Além da Programação, estas são as outras atividades que
                        gosto de fazer:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i> Tocar
                            Violão
                        </li>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i> Tocar
                            Flauta Transversal
                        </li>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i>{" "}
                            Fotografar
                        </li>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i> Ler
                        </li>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i> Viajar
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                        "Trabalhe, Sirva, Seja Forte, Não Encha o saco!"{" "}
                    </p>
                    <footer className="blockquote-footer">Italo Marsili</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
