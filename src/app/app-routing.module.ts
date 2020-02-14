import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BegaiComponent } from './begai/begai.component';
import { BetraiComponent } from './betrai/betrai.component';
import { JeansComponent } from './jeans/jeans.component';
import { SaleComponent } from './sale/sale.component';
import { NuComponent } from './nu/nu.component';
import { SomiComponent } from './somi/somi.component';
import { VayComponent } from './vay/vay.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { HomeComponent } from './home/home.component';
import {InfoComponent } from './info/info.component';
import {ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {BetraiaophongComponent } from './betraiaophong/betraiaophong.component';
import {DangkyComponent } from './dangky/dangky.component';
import {DangnhapComponent } from './dangnhap/dangnhap.component'

const routes: Routes = [
  {path: 'begai' ,component: BegaiComponent },
  {path: 'betrai' ,component: BetraiComponent },
  {path: 'jeans' ,component: JeansComponent },
  {path: 'sale' ,component: SaleComponent },
  {path: 'nu' ,component: NuComponent },
  {path: 'somi' ,component: SomiComponent },
  {path: 'vay' ,component: VayComponent },
  {path: 'lienhe' ,component: LienheComponent },
  {path: '' ,component: HomeComponent },
  {path: 'info' ,component: InfoComponent },
  {path: 'shoppingcart' ,component: ShoppingcartComponent },
  {path: 'a' ,component: BetraiaophongComponent },
  {path: 'dangky' ,component: DangkyComponent },
  {path: 'dangnhap' ,component: DangnhapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
