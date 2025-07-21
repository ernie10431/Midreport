import { First } from './first/first';
import { Secend } from './secend/secend';
import { Third } from './third/third';
import { Forth } from './forth/forth';
import { Fifth } from './fifth/fifth';
import { Sixth } from './sixth/sixth';
import { Seventh } from './seventh/seventh';
import { Eighth } from './eighth/eighth';
import { Ninth } from './ninth/ninth';
import { Tenth } from './tenth/tenth';
import { Routes } from '@angular/router';
import { Preview } from './preview/preview';
import { ReadData } from './read-data/read-data';



export const routes: Routes = [
{path:'',redirectTo:'/third',pathMatch:'full'},
{path: 'first', component: First},
{path: 'second', component: Secend},
{path: 'third', component: Third},
{path: 'forth', component: Forth},
{path: 'fifth', component: Fifth},
{path: 'sixth', component: Sixth},
{path: 'seventh', component: Seventh},
{path: 'eighth', component: Eighth},
{path: 'ninth', component: Ninth},
{path: 'tenth', component: Tenth},
{path: 'preview', component: Preview},
{path: 'readData/:index', component: ReadData}



];
