import { Component } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = faMagnifyingGlass;
  isSidebarCollapsed = false;

  onSidebarCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log("sidebar: " + this.isSidebarCollapsed);
  }
}
