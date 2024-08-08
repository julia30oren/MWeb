import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

interface themesInterface {
  id: number;
  color: string,
  active: boolean
};

let themes: themesInterface[] = [{
  id: 1,
  color: 'pink',
  active: true
},
{
  id: 2,
  color: 'black',
  active: false
},
{
  id: 3,
  color: 'green',
  active: false
},
];


@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myCli';
  myThemes = themes;

  themeSt(){
    let st;
    themes.forEach(element => {
      if (element.active) {
        st = element.color;
      }
    })
    return st;
  }

  styleChange(new_style: string) {

    themes.forEach(element => {

      if (!element.active || element.color !== new_style) {
        element.active = false;
        if (!element.active && element.color === new_style) {
          element.active = true;
        }
      }
    });
    this.myThemes = themes;
  }
}
