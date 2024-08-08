import { Component } from '@angular/core';

interface projectInterface {
  title: string;
  media: string;
  deskription: string[];
  link: string;
  technologies: string[];
}

const side_projects: projectInterface[] = [
  {
    title: `Simple Ping Pong Game`,
    media: `ping_pong`,
    deskription: [
      `I'm thrilled to share a project that's been a labor of love and a fantastic learning experience: I’ve created a Ping Pong game using C++ and Raylib!`,
      `As a passionate programmer, I wanted to challenge myself with a fun and engaging project. This Ping Pong game is not just a classic pastime but a testament to the power and versatility of C++. By diving into game development, I've honed my skills in object-oriented programming, real-time graphics rendering, and event handling.`,
      `Key features include:`,
      `1. Interactive Gameplay`,
      `2. Dynamic Scoring System`,
      `3. Smart AI Opponent`,
      `This project allowed me to experiment with game logic, refine my coding techniques, and explore creative problem-solving in C++. I'm excited about the potential for future improvements and additional features!`
    ],
    link: `https://github.com/julia30oren/Ping_Pong_Game?tab=readme-ov-file#readme`,
    technologies: [`C++`, `Raylib`]
  },
  {
    title: `2D pixel Snake Game`,
    media: `Snake`,
    deskription: [
      `I'm thrilled to share a project that's been a labor of love and a fantastic learning experience: I’ve created a Ping Pong game using C++ and Raylib!`,
      `As a passionate programmer, I wanted to challenge myself with a fun and engaging project. This Ping Pong game is not just a classic pastime but a testament to the power and versatility of C++. By diving into game development, I've honed my skills in object-oriented programming, real-time graphics rendering, and event handling.`,
      `Key features include:`,
      `1. Interactive Gameplay`,
      `2. Dynamic Scoring System`,
      `3. Smart AI Opponent`,
      `This project allowed me to experiment with game logic, refine my coding techniques, and explore creative problem-solving in C++. I'm excited about the potential for future improvements and additional features!`
    ],
    link: `https://github.com/julia30oren/Snake_Game/tree/main`,
    technologies: [`C++`, `Raylib`]
  },
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})

export class PortfolioComponent {
  side_projects = side_projects;
}
