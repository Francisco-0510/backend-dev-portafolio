import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
  ){}

  redirectGitlab(): void {
    window.open("https://gitlab.com/Braquetes", "_blank");
  }

  redirectGithub() :void {
    window.open("https://github.com/Braquetes", "_blank");

  }

  redirectLinkedIn(): void {
    window.open("https://www.linkedin.com/in/rodolfo-braquetes-395003241/", "_blank");

  }

  redirectFacebook(): void {
    window.open("https://www.facebook.com/Braquetes/", "_blank");

  }

  redirectInstagram(): void {
    window.open("https://www.instagram.com/rodolfobraquetes/", "_blank");

  }

}
