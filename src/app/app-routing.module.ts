import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./pages/verify-email/verify-email.component";
import { authGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "verify-email", component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
