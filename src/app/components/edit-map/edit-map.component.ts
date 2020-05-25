import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-edit-map",
  templateUrl: "./edit-map.component.html",
  styleUrls: ["./edit-map.component.css"],
})
export class EditMapComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit() {}
}
