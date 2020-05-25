import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/classes/marcador.class";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"],
})
export class MapaComponent {
  marcadores: Marcador[] = [];
  durationInSeconds = 5;

  lat = 4.570868;
  lng = -74.2973328;
  zoom = 5;
  constructor(private snackBar: MatSnackBar) {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  addMarker(event) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.saveStorage();
    this.snackBar.open("Added Marker", "Close");
  }

  deleteMarker(index) {
    this.marcadores.splice(index, 1);
    this.saveStorage();
    this.snackBar.open("Deleted Marker", "Close");
  }

  saveStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}
