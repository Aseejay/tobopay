import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { FeaturesComponent } from './home-page/features/features.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent, children:[{path:'features', component:FeaturesComponent}]},
  {path:'contact-us', component:ContactPageComponent},
  {path:':url/agent', component:AgentPageComponent},
  {path:':url/term-of-service', component:TermOfServiceComponent},
  {path:':url/privacy-policy', component:PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
