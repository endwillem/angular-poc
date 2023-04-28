import { Component, OnInit } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { SeoService } from '../../seo.service';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { actionBlogpost, actionPage } from 'src/app/store/actions/state.actions';

@Component({
  selector: 'app-about',
  templateUrl: './single-member.component.html',
  styleUrls: []
})
export class SingleMemberComponent implements OnInit {

  constructor(private cs: ContentstackQueryService, private seo: SeoService, private metaTagService: Meta, private store: Store) { }
  page = 'About';
  member: any = {};
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
    this.cs.getEntryWithQuery('member', { key: 'url', value: '/' + window.location.pathname.split('/')[1] },
    [],
    ["rte_test"]).then(entry => {
      this.member = entry[0][0];
      const jsonData = this.filterObject(entry[0][0]);
      this.store.dispatch(actionPage({ page: jsonData }));
      this.store.dispatch(actionBlogpost({ blogpost: null }));
      this.member.single_reference = true;
      console.log(this.member);

      if (this.member.seo) { this.seo.getSeoField(this.member.seo, this.metaTagService); }
    }, err => {
      console.log(err, 'err');
    });
  }

  ngOnInit(): void {
    this.getEntry();
  }
}
