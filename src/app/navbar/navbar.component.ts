import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faVideo, faFolder, faSearch, faUser, faMinus, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgbCollapseModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {
    router.events.subscribe((route: any) => this.routeUrl = route.url);
  }

  isMenuCollapsed = true;
  isDropdownCollapsed = true;
  routeUrl: any;
  faHome = faHome;
  faVideo = faVideo;
  faFolder = faFolder;
  faSearch = faSearch;
  faUser = faUser;
  faMinus = faMinus;
  faBars = faBars;
}