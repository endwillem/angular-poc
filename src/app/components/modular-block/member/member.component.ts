import { Component, OnInit, Input } from '@angular/core';
import { ContentstackQueryService } from '../../../cs.query.service';
import { Store } from '@ngrx/store';
import { actionHeader } from 'src/app/store/actions/state.actions';

@Component({
  selector: 'member-section',
  templateUrl: './member.component.html',
  styleUrls: []
})
export class MemberComponent implements OnInit {

  constructor(private cs: ContentstackQueryService, private store: Store) { }

  @Input() member_reference: any;
  @Input() iteration: any;
  @Input() page: string;

  memberComponent: any = {};

  filterObject(inputObject) {
    const unWantedProps = [
      "uid",
      "_version",
      "ACL",
      "_in_progress",
      "created_at",
      "created_by",
      "updated_at",
      "updated_by",
      "publish_details",
    ];
    for (const key in inputObject) {
      unWantedProps.includes(key) && delete inputObject[key];
      if (typeof inputObject[key] !== "object") {
        continue;
      }
      inputObject[key] = this.filterObject(inputObject[key]);
    }
    return inputObject;
  }

  getEntry() {

    this.cs.getEntry(
      this.member_reference.reference[0]._content_type_uid,
      [],
      ["rte_test"]).then(entry => {

      for(let i=0; i < entry[0].length; i++) {
        if (entry[0][this.iteration].uid === entry[0][i].uid ){
          this.memberComponent = entry[0][this.iteration];

          console.log(this.memberComponent);


        }
      }
    }, err => {
      console.log(err, 'err');
    });
  }

  ngOnInit(): void {


    this.getEntry();

  }
}
