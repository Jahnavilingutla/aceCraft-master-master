import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountsOrdersComponent } from './components/contact/Help/accounts-orders/accounts-orders.component';
import { OthersComponent } from './components/contact/Help/others/others.component';
import { PaymentComponent } from './components/contact/Help/payment/payment.component';
import { ShippingComponent } from './components/contact/Help/shipping/shipping.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { CartItemsComponent } from './components/products/cart-items/cart-items.component';
import { AuthGuard } from './services/auth.guard';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { NotesComponent } from './components/notes/notes.component';
import { ActingComponent } from './components/BlogDescriptions/acting/acting.component';
import { BodytypesWomensComponent } from './components/BlogDescriptions/bodytypes-womens/bodytypes-womens.component';
import { ClassiclooksHimComponent } from './components/BlogDescriptions/classiclooks-him/classiclooks-him.component';
import { CollegelookComponent } from './components/BlogDescriptions/collegelook/collegelook.component';
import { CorporatetocupcakesComponent } from './components/BlogDescriptions/corporatetocupcakes/corporatetocupcakes.component';
import { DressingtosucceedComponent } from './components/BlogDescriptions/dressingtosucceed/dressingtosucceed.component';
import { RightwayComponent } from './components/BlogDescriptions/rightway/rightway.component';
import { SelectingComponent } from './components/BlogDescriptions/selecting/selecting.component';
import { TheAcecraftDifferenceComponent } from './components/BlogDescriptions/the-acecraft-difference/the-acecraft-difference.component';
import { TipsforgreateoutfitComponent } from './components/BlogDescriptions/tipsforgreateoutfit/tipsforgreateoutfit.component';
import { WorkWearForAllSeasonsComponent } from './components/BlogDescriptions/work-wear-for-all-seasons/work-wear-for-all-seasons.component';
import { SchoolComponent } from './components/school/school.component';
import { School1Component } from './components/school1/school1.component';
import { CollegeComponent } from './components/college/college.component';
import { AboutComponent } from './components/about/about.component';
import { ProductionComponent } from './components/production/production.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { CareComponent } from './components/care/care.component';
import { TermsComponent } from './components/terms/terms.component';
import { StylingComponent } from './components/BlogDescriptions/styling/styling.component';
import { OrderstatusComponent } from './components/orderstatus/orderstatus.component';
import { AccountComponent } from './components/account/account.component';
import { AddressComponent } from './components/account/address/address.component';
import { OrderHistoryComponent } from './components/account/order-history/order-history.component';
import { PersonalInfoComponent } from './components/account/personal-info/personal-info.component';
import { TrackOrderComponent } from './components/account/track-order/track-order.component';
import { WalletComponent } from './components/account/wallet/wallet.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  {path:'',redirectTo:'./Home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
 // {path:'product',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'product',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'accountsOrders',component:AccountsOrdersComponent},
  {path:'others',component:OthersComponent},
  {path:'payment',component:PaymentComponent},
  {path:'shipping',component:ShippingComponent},
  {path:"viewProduct/:id",component:ViewProductComponent},
  {path:"cartItem",component:CartItemsComponent},
  {path:"enterprise",component:EnterprisesComponent},
  {path:"notes",component:NotesComponent},
  {path:"ACING",component:ActingComponent},
  {path:"bodytypeswomens",component:BodytypesWomensComponent},
  {path:"classiclookhim",component:ClassiclooksHimComponent},
  {path:"collegelook",component:CollegelookComponent},
  {path:"corporatetocupcakes",component:CorporatetocupcakesComponent},
  {path:"dressingtosucceed",component:DressingtosucceedComponent},
  {path:"rightway",component:RightwayComponent},
  {path:"selecting",component:SelectingComponent},
 {path:"styling",component:StylingComponent},
 {path:"theacecraftdifference",component:TheAcecraftDifferenceComponent},
 {path:"tipsforgreateoutfit",component:TipsforgreateoutfitComponent},
 {path:"workwearforallseason",component:WorkWearForAllSeasonsComponent},
 {path:"school",component:SchoolComponent},
 {path:"school1",component:School1Component},
 {path:"college",component:CollegeComponent},
 {path:"about",component:AboutComponent},
 {path:"production",component:ProductionComponent},
 {path:"returns",component:ReturnsComponent},
 {path:"care",component:CareComponent},
 {path:"terms",component:TermsComponent},
 {path:"orderstatus",component:OrderstatusComponent},
 {path:"account",component:AccountComponent},
 {path:"address",component:AddressComponent},
 {path:"order-history",component:OrderHistoryComponent},
 {path:"personal",component:PersonalInfoComponent},
 {path:"track",component:TrackOrderComponent},
 {path:"wallet",component:WalletComponent},
 {path:"forgot",component:ForgotPasswordComponent},
 {path:"check",component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
