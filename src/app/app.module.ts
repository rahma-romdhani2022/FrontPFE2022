import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AccueilOphtalmologueComponent } from './Ophtalmologue/accueil-ophtalmologue/accueil-ophtalmologue.component';
import { AjoutAvisComponent } from './Ophtalmologue/ajout-avis/ajout-avis.component';
import { InfosPatientComponent } from './Ophtalmologue/infos-patient/infos-patient.component';
import { LoginOphtalmologueComponent } from './Ophtalmologue/authentification/login-ophtalmologue/login-ophtalmologue.component';
import { RegistreOphtalmologueComponent } from './Ophtalmologue/authentification/registre-ophtalmologue/registre-ophtalmologue.component';
import { RepondreAvis1Component } from './Ophtalmologue/repondre-avis1/repondre-avis1.component';
import { SecondPageComponent } from './Ophtalmologue/second-page/second-page.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatRadioModule,  
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,

  MatSortModule,
MatTableDataSource} from '@angular/material';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ImageComponent } from './image/image.component';
import { HistoriqueAvisComponent } from './Ophtalmologue/historique-avis/historique-avis.component';
import { FormPageComponent } from './Ophtalmologue/form-page/form-page.component';
import { ConsultationComponent } from './Ophtalmologue/historique-avis/consultation/consultation.component';
import { OphtalmologueComponent } from './Ophtalmologue/ophtalmologue.component';
import { ForgetPasswordComponent } from './Ophtalmologue/forget-password/forget-password.component';
import { ResetPwdComponent } from './Ophtalmologue/forget-password/reset-pwd/reset-pwd.component';
import { ProfilePageComponent } from './Ophtalmologue/Profile/profile-page/profile-page.component';
import { EditProfileComponent } from './Ophtalmologue/Profile/edit-profile/edit-profile.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { BtnProfilComponent } from './Ophtalmologue/btn-profil/btn-profil.component';
import { LoginAdminComponent } from './Admin/Authentification Admin/login-admin/login-admin.component';
import { RegistreAdminComponent } from './Admin/Authentification Admin/registre-admin/registre-admin.component';
import { AllDoctorsComponent } from './Admin/Doctors/all-doctors/all-doctors.component';
import { AddDoctorComponent } from './Admin/Doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Admin/Doctors/edit-doctor/edit-doctor.component';
import { AddDoctor2Component } from './Admin/Doctors/add-doctor2/add-doctor2.component';
import { ChartActivityComponent } from './Ophtalmologue/chart-activity/chart-activity.component';
import { DossiersConsultationsComponent } from './Ophtalmologue/historique-avis/dossiers-consultations/dossiers-consultations.component';
import { ProfilDoctorComponent } from './Admin/Doctors/profil-doctor/profil-doctor.component';
import { PatientsDrOphtalmologueComponent } from './Admin/Doctors/patients-dr-ophtalmologue/patients-dr-ophtalmologue.component';
import { ChartActivityDrOphtalmologueComponent } from './Admin/Doctors/chart-activity-dr-ophtalmologue/chart-activity-dr-ophtalmologue.component';
import { AllPatientsComponent } from './Admin/Patient/all-patients/all-patients.component';
import { EditPatientComponent } from './Admin/Patient/edit-patient/edit-patient.component';
import { EditPatientDialogComponent } from './Admin/Patient/edit-patient-dialog/edit-patient-dialog.component';
import { AllMGComponent } from './Admin/MG/all-mg/all-mg.component';
import { EditMGComponent } from './Admin/MG/edit-mg/edit-mg.component';
import { DialogDetailsComponent } from './Admin/Doctors/patients-dr-ophtalmologue/dialog-details/dialog-details.component';
import { AllIAComponent } from './Admin/IA Modeles/all-ia/all-ia.component';
import { AddIAModelComponent } from './Admin/IA Modeles/add-ia-model/add-ia-model.component';
import { StatDrComponent } from './Admin/Statistiques/stat-dr/stat-dr.component';
import { StatPatientComponent } from './Admin/Statistiques/stat-patient/stat-patient.component';
import { StatAppComponent } from './Admin/Statistiques/stat-app/stat-app.component';
import { EditIaModelComponent } from './Admin/IA Modeles/edit-ia-model/edit-ia-model.component';
import { StatModeleComponent } from './Admin/Statistiques/stat-modele/stat-modele.component';
import { EspaceStockageComponent } from './Admin/espace-stockage/espace-stockage.component';
import { ForgetPswdAdminComponent } from './Admin/Authentification Admin/forget-pswd-admin/forget-pswd-admin.component';
import { PageTelechargementComponent } from './page-telechargement/page-telechargement.component';
import { AuthInterceptor } from './services/AuthInterceptor';
import { ProfileAdminComponent } from './Admin/Profile-Admin/profile-admin/profile-admin.component';
import { EditProfileAdminComponent } from './Admin/Profile-Admin/edit-profile-admin/edit-profile-admin.component';
import { TeteInstallationComponent } from './page-telechargement/header/tete-installation/tete-installation.component';
import { TestUploadImageComponent } from './test-upload-image/test-upload-image.component';
import { MAT_DIALOG_DATA , MatDialogRef, MatDialogModule} from "@angular/material/dialog";
import {NgxPaginationModule} from 'ngx-pagination';
import { FlipComponent } from './flip/flip.component';
import { RepondreDroiteComponent } from './Ophtalmologue/repondre avis/oeil droite/repondre-droite/repondre-droite.component';
import { RepondreGaucheComponent } from './Ophtalmologue/repondre avis/oeil gauche/repondre-gauche/repondre-gauche.component';
import { AjoutDroiteComponent } from './Ophtalmologue/ajout avis/oeil droite/ajout-droite/ajout-droite.component';
import { AjoutGaucheComponent } from './Ophtalmologue/ajout avis/oeil gauche/ajout-gauche/ajout-gauche.component';
import { ConsltOeilDroiteComponent } from './Ophtalmologue/historique-avis/consultation/oeil droite/conslt-oeil-droite/conslt-oeil-droite.component';
import { ConsltOeilGaucheComponent } from './Ophtalmologue/historique-avis/consultation/oeil gauche/conslt-oeil-gauche/conslt-oeil-gauche.component';
import { PatientsMGComponent } from './Admin/MG/patients-mg/patients-mg.component';
import { AuthGuardExpert } from './services/authGuardExpert';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';
import { RatingConsultationComponent } from './Ophtalmologue/rating-consultation/rating-consultation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImagesssComponent } from './imagesss/imagesss.component';
import { OwlModule } from 'ngx-owl-carousel';
import { LiensResetFormComponent } from './liens-reset-form/liens-reset-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './Ophtalmologue/chart/chart.component';
import { HistDroiteComponent } from './Ophtalmologue/historique-avis/consultation/historiquesConsultation/OeilDroite/hist-droite/hist-droite.component';
import { HistGaucheComponent } from './Ophtalmologue/historique-avis/consultation/historiquesConsultation/OeilGauche/hist-gauche/hist-gauche.component';  
import { MatCarouselModule } from '@ngmodule/material-carousel'; // ---------- Important
const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/' ,'.json');
}
@NgModule({
  declarations: [ 

    AppComponent,
    HomePageComponent,
    AccueilOphtalmologueComponent,
    AjoutAvisComponent,
    InfosPatientComponent,
    LoginOphtalmologueComponent,
    RegistreOphtalmologueComponent,
    RepondreAvis1Component,
    SecondPageComponent,
    TestComponent,
    Test2Component,
    ImageComponent,
    HistoriqueAvisComponent,
    FormPageComponent,
    OphtalmologueComponent,
    ConsultationComponent,
    ForgetPasswordComponent,
    ResetPwdComponent,
    ProfilePageComponent,
    EditProfileComponent,
    DashboardComponent,
    BtnProfilComponent,
    LoginAdminComponent,
    RegistreAdminComponent,
    AllDoctorsComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    AddDoctor2Component,
    ChartActivityComponent,
    DossiersConsultationsComponent,
    ProfilDoctorComponent,
    PatientsDrOphtalmologueComponent,
    ChartActivityDrOphtalmologueComponent,
    AllPatientsComponent,
    EditPatientComponent,
    EditPatientDialogComponent,
    AllMGComponent,
    EditMGComponent,
    DialogDetailsComponent,
    AllIAComponent,
    AddIAModelComponent,
    StatDrComponent,
    StatPatientComponent,
    StatAppComponent,
    EditIaModelComponent,
    StatModeleComponent,
    EspaceStockageComponent,
    ForgetPswdAdminComponent,
    PageTelechargementComponent,
    ProfileAdminComponent,
    EditProfileAdminComponent,
    TeteInstallationComponent,
    TestUploadImageComponent,
    FlipComponent,
    RepondreDroiteComponent,
    RepondreGaucheComponent,
    AjoutDroiteComponent,
    AjoutGaucheComponent,
    ConsltOeilDroiteComponent,
    ConsltOeilGaucheComponent,
    PatientsMGComponent,
    RatingConsultationComponent,
    ImagesssComponent,
    LiensResetFormComponent,
    PageNotFoundComponent,
    ChartComponent,
    HistDroiteComponent,
    HistGaucheComponent,


 
  ],
  imports: [
    MatCarouselModule.forRoot(), // ---------- Important
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  OwlModule  ,
    NgbModule,
    SimpleModalModule,
    FlexLayoutModule ,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule, 
    MatTableModule,
    MatTabsModule,
    MatStepperModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,

  ],
  entryComponents: [
    AddDoctorComponent,
    EditDoctorComponent,
    EditPatientComponent,
    DialogDetailsComponent ,
    EditMGComponent
  ],
  exports : [MATERIAL_MODULES,
  TranslateModule,],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,// to which injection token do we want to associate our class with
      useClass: AuthInterceptor,
      multi: true //multiple http interceptor orginized in a chain
    } , 
    [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
      { provide: MatDialogRef, useValue: {} }],
      AuthGuardExpert ,
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
