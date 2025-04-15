import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {roleGuard} from "./guards/role.guard";
import {visitorOnlyGuard} from "./guards/visitor-only.guard";

export const routes: Routes = [

    {
        path: 'article/:id',
        component: ArticlePageComponent
    },
    {
        path: 'contact',
        component: ContactFormComponent
    },
    {
        path: 'signup',
        component: SignupFormComponent
    },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [visitorOnlyGuard]
    },
    {
      path: 'profile',
      component: ProfilePageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'admin',
      component: AdminPageComponent,
      canActivate: [roleGuard('ROLE_ADMIN')]
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },

];
