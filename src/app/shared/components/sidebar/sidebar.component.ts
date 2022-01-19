import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  //#region Variables Declaration
  public isScreenSmall!: boolean;
  //#endregion

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe({
      next: (state: BreakpointState) => this.isScreenSmall = state.matches
    });

    // this.router.events.subscribe({
    //   complete: () => {
    //     if (this.isScreenSmall)
    //       this.sidenav.close();
    //   }
    // })
  }


}
