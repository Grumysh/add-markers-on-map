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
    const nuevoMarcador = new Marcador(4.570868, -74.2973328);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {}

  addMarker(event){
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
  }
}
