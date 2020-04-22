import { Component, OnInit } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagramSquare = faInstagramSquare;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
