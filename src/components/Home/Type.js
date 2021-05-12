import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Desenvolvedor FrontEnd Jr",
                    "Web Designer",
                    "Graduando de Análise e Desenvolvimento de Sistemas",
                    "Apaixonado por Tecnologia",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
