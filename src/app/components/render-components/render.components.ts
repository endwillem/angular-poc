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

  getEntry() {
    /*
    this.cs.getEntryWithQuery(
      "page",
      { key: "url", value: "/about-us"},
      [
        "page_components.reference_block.reference",
        "page_components.reference_block_to_member_inverted.reference"
      ],
      [
        "page_components.reference_block.reference.rte_test",
        "page_components.reference_block_to_member_inverted.reference.json_rte"
      ]).then(entry => {
      for(let i=0; i < entry[0].length; i++) {
        if (entry[0][this.iteration].uid === entry[0][i].uid ){
          //this.memberComponent = entry[0][this.iteration];
        }
      }
    }, err => {
      console.log(err, 'err');
    });*/
  }

  ngOnInit(): void {
    console.log(this.pageComponents)
    this.getEntry();
  }
}
