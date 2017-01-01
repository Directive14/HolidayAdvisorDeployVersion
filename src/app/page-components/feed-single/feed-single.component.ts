import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-single',
  templateUrl: './feed-single.component.html',
  styleUrls: ['./feed-single.component.css']
})
export class FeedSingleComponent implements OnInit {

   @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

  private openLinkInBrowser() {
    window.open(this.feed.link);
  }
}