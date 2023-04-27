import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-inverted',
  templateUrl: './hero-inverted.component.html',
  styleUrls: []
})
export class HeroInvertedComponent implements OnInit {
  constructor() { }
  @Input() hero: any;
  @Input() page: string;
  ngOnInit(): void {

    console.log(this.hero);
  }
}
