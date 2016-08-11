import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {ISubscription} from 'rxjs/Subscription';

import {MdToolbar}                        from '@angular2-material/toolbar';
import {MdButton}                         from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES, MdSidenav} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';


export interface IRootViewData {
  name: string;
  description: string;
  icon: string;
  route: string;
}


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon],
    providers: [
    MdIconRegistry]
})
export class AppComponent {
  title: string = "Academy";
  
  private _views: IRootViewData[];

  public get views(): IRootViewData[] {
    return this._views;
  }

  private _router: Router;
  
  @ViewChild('sidenav')
  public sidenav: MdSidenav;

  constructor(router: Router) { 
    this._router = router;
  }
  
  public ngOnInit(): void {
    this._views = [
      {
        name: 'ClusterList',
        description: 'Cluster List',
        icon: 'group',
        route: 'clusters'
      }
    ];
  }

  onNavigate(view: IRootViewData): void {
    console.log(`Navigating to view '${view.name}'...`);

    this._router.navigateByUrl(view.route);

    this.sidenav.close();
  }
}
