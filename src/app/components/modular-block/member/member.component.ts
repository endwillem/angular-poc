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
  @Input() page: string;

  memberComponent: any = {};

  ngOnInit(): void {
    console.log('member loaded: ', this)

    this.memberComponent = this.member_reference.reference[0]

  }
}
