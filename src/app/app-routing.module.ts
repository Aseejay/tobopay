import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { ContactUsComponent } from './landing-page/contact-us/contact-us.component';
import { AgentComponent } from './landing-page/agent/agent.component';
import { TermsOfServiceComponent } from './landing-page/terms-of-service/terms-of-service.component';
import { PrivacyOfPolicyComponent } from './landing-page/privacy-of-policy/privacy-of-policy.component';
import { DeactivateAccountComponent } from './landing-page/deactivate-account/deactivate-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'become-an-agent', component: AgentComponent },
  {path:'terms-of-service', component:TermsOfServiceComponent},
  {path:'privacy-of-policy', component:PrivacyOfPolicyComponent},
  {path:'Deactivate-account', component:DeactivateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
