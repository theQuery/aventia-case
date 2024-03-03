import { Routes } from '@angular/router';
import { VideoPageComponent } from './video-page/video-page.component';

export const routes: Routes = [
    { path: 'video', component: VideoPageComponent },
    { path: 'hjem', component: VideoPageComponent },
    { path: '', redirectTo: '/video', pathMatch: 'full' },
    { path: '**', redirectTo: '/video', pathMatch: 'full' },
];