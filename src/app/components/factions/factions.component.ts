import { Component, OnInit } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { SeoService } from '../../seo.service';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { actionBlogpost, actionPage } from 'src/app/store/actions/state.actions';

@Component({
  selector: 'app-about',
  templateUrl: './factions.component.html',
  styleUrls: []
})
export class FactionsComponent implements OnInit {

  constructor(private cs: ContentstackQueryService, private seo: SeoService, private metaTagService: Meta, private store: Store) { }
  page = 'Factions';
  factionsContent: any = {};

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
    this.cs.getEntryWithQuery('page', { key: 'url', value: '/factions' }, [],
    ["page_components.section_with_buckets.buckets.description",]).then(entry => {
      this.factionsContent = entry[0][0];
      const jsonData = this.filterObject(entry[0][0])
      this.store.dispatch(actionPage({ page: jsonData }));
      this.store.dispatch(actionBlogpost({ blogpost: null }));
      if (this.factionsContent.seo) { this.seo.getSeoField(this.factionsContent.seo, this.metaTagService); }
    }, err => {
      console.log(err, 'err');
    });
  }

  ngOnInit(): void {
    this.getEntry();
  }
}
