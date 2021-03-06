import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule, NavbarModule, IconsModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { StudentComponent } from './student/student.component';
import { SsignupComponent } from './student/ssignup/ssignup.component';
import { SchoolComponent } from './school/school.component';
import { SdashboardComponent } from './school/sdashboard/sdashboard.component';
import { TdetailComponent } from './school/tdetail/tdetail.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { SchoolnavComponent } from './school/schoolnav/schoolnav.component';
import { SscomplainComponent } from './school/sscomplain/sscomplain.component';
import { TregisterComponent } from './school/teacher/tregister/tregister.component';
import { HomeComponent } from './home/home.component';
import { BsregisterComponent } from './block/bsregister/bsregister.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClassComponent } from './school/class/class.component';
import { SdetailComponent } from './school/class/sdetail/sdetail.component';
import { NtregisterComponent } from './school/ntregister/ntregister.component';
import { ExamComponent } from './school/exam/exam.component';
import { SmainComponent } from './school/smain/smain.component';
import { SattendComponent } from './school/sattend/sattend.component';
import { PapaParseModule,Papa } from 'ngx-papaparse';
import { DummyComponent } from './dummy/dummy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BlocknavComponent } from './block/blocknav/blocknav.component';
import { BdashboardComponent } from './block/bdashboard/bdashboard.component';
import { BlockComponent } from './block/block.component';
import { BinspectComponent } from './block/binspect/binspect.component';
import { DistrictComponent } from './district/district.component';
import { DdashComponent } from './district/ddash/ddash.component';
import { DnavComponent } from './district/dnav/dnav.component';
import * as firebase from 'firebase/app';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { BinsdetailComponent } from './block/binsdetail/binsdetail.component';
import { NtdetailComponent } from './school/ntdetail/ntdetail.component';
import { SfootComponent } from './school/sfoot/sfoot.component';


const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'school', component: SchoolComponent },
  { path: '', component: HomeComponent },
  { path: 'sattend', component:SattendComponent },
  { path: 'ntdetail', component: NtdetailComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'block', component: BlockComponent },
  { path: 'binsdetail', component: BinsdetailComponent },
  { path: 'binspect', component: BinspectComponent },
  { path: 'smain', component: SmainComponent },
{ path: 'ssignup', component: SsignupComponent },
{ path: 'tdetail', component: TdetailComponent },
{ path: 'sdetail', component: SdetailComponent },
{ path: 'sscomplain', component: SscomplainComponent },
  { path: 'tregister', component: TregisterComponent },
  { path: 'ntregister', component: NtregisterComponent },
  { path: 'exam', component: ExamComponent }
]


@NgModule({
 
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StudentComponent,
    SsignupComponent,
    SchoolComponent,
    SdashboardComponent,
    TdetailComponent,
    SchoolnavComponent,
    SscomplainComponent,
    TregisterComponent,
    HomeComponent,
    BsregisterComponent,
    ClassComponent,
    SdetailComponent,
    NtregisterComponent,
    ExamComponent,
    SmainComponent,
    SattendComponent,
    DummyComponent,
    BlocknavComponent,
    BdashboardComponent,
    BlockComponent,
    BinspectComponent,
    DistrictComponent,
    DdashComponent,
    DnavComponent,
    UploadFormComponent,
    BinsdetailComponent,
    NtdetailComponent,
    SfootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgbModule,
    DropdownModule.forRoot(),
    NavbarModule,
    IconsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PapaParseModule,
    ButtonsModule,
    WavesModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}


