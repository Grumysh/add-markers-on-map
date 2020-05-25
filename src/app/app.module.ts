import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { MapaComponent } from "./components/mapa/mapa.component";
import { AgmCoreModule } from "@agm/core";
import { EditMapComponent } from "./components/edit-map/edit-map.component";

@NgModule({
  entryComponents: [EditMapComponent],
  declarations: [AppComponent, MapaComponent, EditMapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAFn9aZCwhRYEQJiMVS_AjV6XcYELy9zXs",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
