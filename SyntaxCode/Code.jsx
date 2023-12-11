export const AboutJs = `const Aboutme = {
  nombre: "Camilo Alvarez",
  edad: 23,
  origen: "Medellín, Colombia",
  intereses: [
    "Desarrollo web",
    "Robótica",
    "Piano",
    "Lectura",
    "Programación",
    "Microcontroladores",
    "Internet de las cosas (IoT)"
  ],
  lenguajes: ["C++", "JavaScript"],
  tecnologias: [
    "MySQL",
    "Laravel",
    "PHP",
    "Node.js",
    "Next.js",
    "MongoDB",
    "CSS",
    "HTML",
    "React",
    "Vue"
  ],
  musica: {
    "instrumento": "Piano",
    "experiencia": "13 años",
    "rol": "Profesor de piano"
  }
}`;

export const AboutC = `#include <iostream>
#include "Aboutme.h"

int main() {
    Aboutme Milodev;
  
    Milodev.nombre = "Camilo Alvarez";
    Milodev.edad = 23;
    Milodev.origen = "Medellín, Colombia";

    Milodev.intereses = 
    {"Desarrollo web", "Robótica", "Piano", "Lectura", 
    "Programación", "Microcontroladores", "(IoT)"  };

    Milodev.lenguajes = {"C++", "JavaScript"};

    Milodev.tecnologias = {"MySQL", "Laravel", "PHP", 
    "Node.js", "Next.js", "MongoDB", "CSS", "HTML", 
    "React", "Vue"};

    Milodev.musica = {"Piano", "13 años", "Profesor de piano"};

    return 0;
}
`;
