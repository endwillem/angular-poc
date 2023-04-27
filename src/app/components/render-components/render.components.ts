import { Component, OnInit, Input } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'render-component',
  templateUrl: './render.components.html',
  styleUrls: []
})
export class RenderComponent implements OnInit {

  constructor(private cs: ContentstackQueryService, private store: Store) { }
  @Input() pageComponents: any;
  @Input() page: string;
  @Input() contentTypeUid:string;
  @Input() entryUid:string;
  @Input() locale:string;
  @Input() iteration: any;

  currentLocation = window.location.pathname.split('/')[1];

  getEntry() {

  }

  ngOnInit(): void {
    this.getEntry();

  }
}
