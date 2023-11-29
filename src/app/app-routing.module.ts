import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { DocsComponent } from "./pages/docs/docs.component";
import { SupportComponent } from "./pages/support/support.component";
import { Link1Component } from "./pages/link1/link1.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { RegisterComponent } from "./pages/authentication/register/register.component";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./starter-home/starter-home.module").then(
				(m) => m.StarterHomeModule
			),
	},
	{
		path: "register",
		component: RegisterComponent,
	},
	{
		path: "client",
		children: [
			{
				path: "catalog",
				component: CatalogComponent,
			},
			{
				path: "docs",
				component: DocsComponent,
			},
			{
				path: "support",
				component: SupportComponent,
			},
			{
				path: "link1",
				component: Link1Component,
			},
		],
	},
	{
		path: "**",
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
