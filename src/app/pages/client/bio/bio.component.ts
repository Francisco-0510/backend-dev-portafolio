import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../providers/router.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

  touch: boolean = false;
  i: number = 0;

  constructor(
     public router: RouterService,
  ){}

  easterEgg():void {
    this.i++;
    if (this.i > 10) {
      this.touch = true;
    }
  }

}
