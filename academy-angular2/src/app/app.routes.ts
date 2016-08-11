import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ComputerListComponent} from './computer-list/computer-list.component';
import {ComputerDetailsComponent} from './computer-details/computer-details.component';
import {ClusterListComponent} from './clusters/clusters.component';
import {HostDetailsComponent} from './host-details/host-details.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'clusters', component: ClusterListComponent },
  { path: 'clusters/:clusterId', component: HostDetailsComponent  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];