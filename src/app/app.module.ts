import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// carbon-components-angular default imports
import {
	IconModule,
	IconService,
	ThemeModule,
	UIShellModule,
	ButtonModule,
	GridModule,
	ListModule,
	RadioModule,
	TabsModule,
	TilesModule,
	InputModule
} from "carbon-components-angular";

// Icons
import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";

// Components
import { HeaderComponent } from "./header/header.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { DocsComponent } from "./pages/docs/docs.component";
import { SupportComponent } from "./pages/support/support.component";
import { Link1Component } from "./pages/link1/link1.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { RegisterComponent } from './pages/authentication/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CatalogComponent,
		DocsComponent,
		SupportComponent,
		Link1Component,
		NotFoundComponent,
  RegisterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		IconModule,
		ThemeModule,
		ButtonModule,
		GridModule,
		ListModule,
		RadioModule,
		TabsModule,
		TilesModule,
		InputModule,
		HttpClientModule,
		//ToastNoAnimationModule.forRoot(),
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
			closeButton: true,

		  }),

	],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([Notification20, UserAvatar20]);
	}
}
