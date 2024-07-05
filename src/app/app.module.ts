import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { HomeComponent } from './landing-page/home/home.component';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { FooterSecondComponent } from './footer-second/footer-second.component';
import { ContactUsComponent } from './landing-page/contact-us/contact-us.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { AgentComponent } from './landing-page/agent/agent.component';
import { TermsOfServiceComponent } from './landing-page/terms-of-service/terms-of-service.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PrivacyOfPolicyComponent } from './landing-page/privacy-of-policy/privacy-of-policy.component';
import { DeactivateAccountComponent } from './landing-page/deactivate-account/deactivate-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FooterSecondComponent,
    ContactUsComponent,
    SpinnerComponent,
    AgentComponent,
    TermsOfServiceComponent,
    PrivacyOfPolicyComponent,
    DeactivateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    SidebarModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    HttpClientModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
