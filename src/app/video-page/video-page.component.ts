import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { VideoService } from '../video.service';
import { TVideo, TBookmark } from '../types';

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent, BookmarksComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css'
})
export class VideoPageComponent implements OnInit {
  constructor(private videoService: VideoService) { }

  video!: TVideo;
  bookmark: TBookmark | undefined;
  error: any;

  ngOnInit() {
    this.getVideo();
  }

  private getVideo() {
    this.videoService.getVideo().subscribe({
      next: video => {
        this.video = video;
        this.error = undefined;
      },
      error: error => {
        this.error = error;
      }
    });
  }

  handleBookmarkEvent(bookmark: any) {
    this.bookmark = bookmark;
  }
}
