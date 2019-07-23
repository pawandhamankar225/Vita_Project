import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
{path:'Home',component:HomeComponent},
{path:'Aboutus',component:AboutUsComponent},
{path:'Courses',component:CoursesComponent},
{path:'Contactus',component:ContactUsComponent},
{path:'Gallery',component:GalleryComponent},
{path:'UserLogin',component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
