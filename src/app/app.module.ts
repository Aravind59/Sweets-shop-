import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatTabsModule, MatIconModule, MatButtonModule, MatSelectModule, MatOptionModule, MatDialogModule, MatBadgeModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MySliderComponent } from './my-slider/my-slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { SweetCardComponent } from './sweet-card/sweet-card.component';
import { SweetTitleComponent } from './sweet-title/sweet-title.component';
import { SweetDescriptionComponent } from './sweet-description/sweet-description.component';
import { SweetVariationComponent } from './sweet-variation/sweet-variation.component';
import { SweetAddCartComponent } from './sweet-add-cart/sweet-add-cart.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SweetsHeaderComponent } from './sweets-header/sweets-header.component';
import { SweetDetailsComponent } from './sweet-details/sweet-details.component';
import { SweetCardsListComponent } from './sweet-cards-list/sweet-cards-list.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CheckOutModalComponent } from './check-out-modal/check-out-modal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MySliderComponent,
    HeaderComponent,
    SweetCardComponent,
    SweetTitleComponent,
    SweetDescriptionComponent,
    SweetVariationComponent,
    SweetAddCartComponent,
    OurMenuComponent,
    ViewMenuComponent,
    HomeComponent,
    SweetsHeaderComponent,
    SweetDetailsComponent,
    SweetCardsListComponent,
    MyCartComponent,
    CheckOutModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule, 
    MatIconModule,
    MatButtonModule,
    MatCarouselModule,
    FlexLayoutModule, 
    FlexModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [],
  entryComponents: [MyCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
