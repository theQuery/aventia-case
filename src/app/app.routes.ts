import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VideoPageComponent } from './video-page/video-page.component';

export const routes: Routes = [
    { path: 'hjem', component: HomePageComponent },
    { path: 'video', component: VideoPageComponent },
    { path: '', redirectTo: '/video', pathMatch: 'full' },
    { path: '**', redirectTo: '/video', pathMatch: 'full' },
];