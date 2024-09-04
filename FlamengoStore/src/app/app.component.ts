import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FlamengoStore';
  currentSection: string = 'home';

  navigateTo(section: string) {
    this.currentSection = section;
  }
}
