import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showText: boolean = true;
  displayText = 'No matter where you are,<br><span>if not until where you wanna get</span>';
  blurActive: boolean = false;

  constructor(
    private router: Router,
  ) { }

  redirectBio() {
    this.router.navigate(['/bio'])
  }

  redirectGithub() {
    window.open("https://github.com/Braquetes", "_blank");
  }

  updateText() {
    if (this.showText) {
      this.displayText = 'No matter where you are,<br><span>if not until where you wanna get</span>';
    } else {
      this.displayText = 'No importa donde estás,<br><span>si no hasta donde quieres llegar</span>';
    }
  }

  toggleText() {
    this.toggleBlur();
    this.showText = !this.showText;
    this.updateText();
  }

  toggleBlur() {
    this.blurActive = !this.blurActive;
  }

  ngOnInit() {
    setInterval(() => {
      this.toggleBlur();

      setTimeout(() => {
        this.toggleText();
      }, 5000);

    }, 19000);
  }


}
