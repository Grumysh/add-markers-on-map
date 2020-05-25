import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
export class EditMapComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      title: data.title,
      desc: data.desc,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {}
}
