import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { FeaturesComponent } from './home-page/features/features.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HttpClientModule} from '@angular/common/http';
import { ServiceProvidersComponent } from './home-page/service-providers/service-providers.component';
import { WhyChooseTobopayComponent } from './home-page/why-choose-tobopay/why-choose-tobopay.component';
import { HowItWorkComponent } from './home-page/how-it-work/how-it-work.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MobileHeaderComponent,
    FooterComponent,
    ContactPageComponent,
    LearnMoreComponent,
    AgentPageComponent,
    TermOfServiceComponent,
    FeaturesComponent,
    PrivacyPolicyComponent,
    ServiceProvidersComponent,
    WhyChooseTobopayComponent,
    HowItWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
