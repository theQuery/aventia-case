import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faFile, faDownload } from '@fortawesome/free-solid-svg-icons';
import { TVideo, TBookmark } from '../types';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, NgbTooltipModule, FontAwesomeModule],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.css'
})
export class BookmarksComponent {
  @Input() video!: TVideo;
  @Output() bookmarkEvent = new EventEmitter<TBookmark>()

  activeBookmark: TBookmark | undefined;
  faPlay = faPlay;
  faFile = faFile;
  faDownload = faDownload;

  playBookmark(bookmark: TBookmark) {
    this.activeBookmark = bookmark;
    this.bookmarkEvent.emit(bookmark);
  }
}
