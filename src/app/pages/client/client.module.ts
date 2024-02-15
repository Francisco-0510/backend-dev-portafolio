import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CvComponent } from './components/cv/cv.component';


@NgModule({
    declarations: [
        HomeComponent,
        BioComponent,
        FooterComponent,
        NavbarComponent,
        CertificatesComponent,
        ProjectsComponent,
        CvComponent,
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
    ]
})
export class ClientModule {
}
