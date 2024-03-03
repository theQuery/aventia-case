import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TVideo, TBookmark } from '../types';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgbTooltipModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent implements OnChanges {
  @ViewChild('videoPlayer') videoElement!: ElementRef;
  @Input() video!: TVideo;
  @Input() bookmark: TBookmark | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookmark'].currentValue) this.playBookmark();
  }

  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  private playBookmark() {
    // TODO: Calculate the time of which the bookmark starts
    this.videoElement.nativeElement.currentTime = 30;
    this.videoElement.nativeElement.play();
  }
}
