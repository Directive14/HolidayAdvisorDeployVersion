import { Component, OnInit } from '@angular/core';
import {FeedService} from '../../_services'
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

 private feedUrl: string = 'https%3A%2F%2Fwww.travelblog.org%2Frss%2Flatest.xml';
  private feeds: any;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}