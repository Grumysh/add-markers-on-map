import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/classes/marcador.class";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { EditMapComponent } from "../edit-map/edit-map.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"],
})
export class MapaComponent {
  marcadores: Marcador[] = [];

  lat = 4.570868;
  lng = -74.2973328;
  zoom = 5;
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    } else {
      const nuevoMarcador = new Marcador(this.lat, this.lng);
      this.marcadores.push(nuevoMarcador);
    }
  }

  addMarker(event) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.saveStorage();
    this.snackBar.open("Added Marker", "Close", { duration: 3000 });
  }

  deleteMarker(index) {
    this.marcadores.splice(index, 1);
    this.saveStorage();
    this.snackBar.open("Deleted Marker", "Close", { duration: 3000 });
  }

  editMarker(marcador: Marcador) {
    const dialogRef = this.dialog.open(EditMapComponent, {
      width: "230px",
      data: { title: marcador.title, desc: marcador.desc },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        marcador.title = result.title;
        marcador.desc = result.desc;
        this.saveStorage();
        this.snackBar.open("Edited Marker", "Close", { duration: 3000 });
      }
    });
  }

  saveStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}
