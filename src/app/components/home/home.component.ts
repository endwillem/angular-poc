import { Component, OnInit } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '../../seo.service';
import { Store } from '@ngrx/store';
import { actionBlogpost, actionPage } from 'src/app/store/actions/state.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  constructor(private cs: ContentstackQueryService, private metaTagService: Meta, private seo: SeoService, private store: Store) { }
  page = 'home';
  homeContent: any = {};
  entryUid: string;

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
    this.cs.getEntryWithQuery('page', { key: 'url', value: '/home' },
      [],
      []).then(entry => {
          this.homeContent = entry;
          const jsonData = this.filterObject(entry[0][0])
          this.store.dispatch(actionPage({ page: jsonData }));
          this.store.dispatch(actionBlogpost({ blogpost: null }));

          console.log('homeComponent ', entry);

          if (this.homeContent.seo) { this.seo.getSeoField(this.homeContent.seo, this.metaTagService); }

        }, err => {

          console.log('error ', err);

        });

  }
  ngOnInit(): void {
    this.getEntry();
  }
}
