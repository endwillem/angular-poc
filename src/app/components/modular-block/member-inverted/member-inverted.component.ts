import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'member-section-inverted',
  templateUrl: './member-inverted.component.html',
  styleUrls: []
})
export class MemberInvertedComponent implements OnInit {
  constructor() { }
  @Input() hero: any;
  @Input() page: string;
  ngOnInit(): void { }
}
