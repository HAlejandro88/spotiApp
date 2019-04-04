import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


// Archivo de rutas que voy a tener 
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},// me redirecciona al home
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];






