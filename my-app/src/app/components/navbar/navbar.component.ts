import {Component, Inject, OnInit} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {label: 'hotelairportservice', styleClass: 'menucus', routerLink: ['/']}
  //     {label: 'Home', icon: 'pi pi-fw pi-home', styleClass: 'menucus', },
  //     {
  //         label: 'File',
  //         styleClass: 'menucus',
  //         items: [{
  //                 label: 'New',
  //                 icon: 'pi pi-fw pi-plus',
  //                 styleClass: 'menucus',
  //                 items: [
  //                     {label: 'Project', styleClass: 'menucus'},
  //                     {label: 'Other', styleClass: 'menucus'},
  //                 ]
  //             },
  //             {label: 'Open', styleClass: 'menucus'},
  //             {label: 'Quit', styleClass: 'menucus'}
  //         ]
  //     },
  //     {
  //         label: 'Edit',
  //         icon: 'pi pi-fw pi-pencil',
  //         styleClass: 'menucus',
  //         items: [
  //             {label: 'Delete', icon: 'pi pi-fw pi-trash', styleClass: 'menucus'},
  //             {label: 'Refresh', icon: 'pi pi-fw pi-refresh', styleClass: 'menucus'}
  //         ]
  //     }
    ];
  }

}
