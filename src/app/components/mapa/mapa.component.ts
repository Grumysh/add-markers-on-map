import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/classes/marcador.class";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat = 4.570868;
  lng = -74.2973328;
  zoom = 5;
  constructor() {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {}

  addMarker(event) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.saveStorage();
  }

  deleteMarker(index) {
    this.marcadores.splice(index, 1);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}
