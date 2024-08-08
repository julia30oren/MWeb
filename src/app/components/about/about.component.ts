import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface experienceInterface {
  id: number;
  title: string;
  date: string;
  company_name: string;
  location: string;
  description: string[];
  skills: string[];
  web_link: string;
};

const experience: experienceInterface[] = [
  {
    id: 1,
    title: `Independent Web Developer`,
    date: `2024`,
    company_name: ``,
    location: `Boston, MA`,
    description: [
    ],
    skills: [
    ],
    web_link: '',
  },
  {
    id: 2,
    title: `Front-End Developer`,
    date: `2021 - 2024`,
    company_name: `Mobilitr`,
    location: `Tel Aviv`,
    description: [
      `I developed, maintained, and shipped production code for client websites. Collaborated with other designers and engineers on projects to create new brand designs and responsive websites for big companies and startups worldwide. Implemented AB testing for advertising media content, analyzing and processing received data in a timely and accurate manner.`
    ],
    skills: [
      `TypeScript`, `JavaScript`, `jQuery`, `Bootstrap`, `WordPress`, `Adobe Photoshop`, `Adobe Premiere Pro`, `Leonardo Ai`, `AB testing`, `Taboola`, `Outbrain`, `Yahoo`, `RevContent`, `GTM`, `Voluum`, `MySQL`, `AWS`
    ],
    web_link: 'https://www.mobilitr.com/',
  },
  {
    id: 3,
    title: `Full-Stack Developer`,
    date: `2021`,
    company_name: `LYS Furniture`,
    location: `Lviv`,
    description: [
      `As a full-stack developer, I enjoyed creating complete solutions for clients, which involved designing user interfaces, coding for both front-end and back-end development, and making sure the final product was successfully deployed to the cloud.`
    ],
    skills: [
      `React`, `Redux`, `TypeScript`, `JavaScript`, `RxJS`, `Adobe Photoshop`, `UI`, `UX`, `Node.js`, `RESTful API`, `MySQL`, `DigitalOcean`
    ],
    web_link: '',
  },
  {
    id: 4,
    title: `Full-Stack Developer`,
    date: `2020 - 2021`,
    company_name: `Luxio by Akzenz`,
    location: `Tel Aviv`,
    description: [
      `As a full-stack developer, my task was to deliver comprehensive solutions to clients, from inception to deployment. This included UI/UX design and coding for both front-end and back-end development, as well as ensuring the successful deployment of the final product to the cloud.`
    ],
    skills: [
      `Angular`, `Firebase`, `TypeScript`, `MongoDB`, `JavaScript`, `RxJS`, `Adobe Photoshop`, `UI`, `UX`, `Node.js`, `RESTful API`, `DigitalOcean`
    ],
    web_link: '',
  },
  {
    id: 5,
    title: `PHP/Full-Stack Developer (education)`,
    date: `2018 - 2019`,
    company_name: `JOHN BRYCE ACADEMY`,
    location: `Tel Aviv`,
    description: [
      `As a full-stack developer, my task was to deliver comprehensive solutions to clients, from inception to deployment. This included UI/UX design and coding for both front-end and back-end development, as well as ensuring the successful deployment of the final product to the cloud.`
    ],
    skills: [
      `Angular`, `TypeScript`, `MongoDB`, `JavaScript`, `RxJS`, `UI`, `UX`, `Node.js`, `RESTful API`, `DigitalOcean`, `MySQL`
    ],
    web_link: '',
  },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit {

  experienceArr = experience;
  skills: string[] = [];
  testimonials: string[] = [
    `I`, `worked`, `with`, `an`, `amazing`, `team`, `of`, `developers,`, `designers,`, `and`, `managers.`, `Here`, `are`, `some`, `testimonials`, `of`, `people`, `I've`, `worked`, `with:`]

  ifInteger(num: number) {
    return num % 2 === 0 ? true : false;
  }

  scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var bar = document.getElementById('myBar');
    if (bar) {
      bar.style.height = scrolled + "%";
    }
  }

  ngOnInit(): void {
    // window.onscroll = () => this.scrollIndicator();

    experience.forEach(element => {
      element.skills.forEach(s => {
        if (!this.skills.includes(s)) {
          this.skills.push(s);
        }
      })
    })
    console.log(this.skills);
  }
}
