import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GiphyService} from './service/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formElements = {
    search: [null]
  };

  formGroup: FormGroup;

  gifs = null;

  constructor(
      private  fb: FormBuilder,
      private giphy: GiphyService
  ) {
  }

  ngOnInit(): void {

    this.formGroup = this.fb.group(this.formElements);
  }

  submit() {
      console.log(this.formGroup.value);
      if (this.formGroup.controls.search.value == null) {
          return;
      }

      this.giphy.search(this.formGroup.controls.search.value).subscribe((res: any) => {
          this.gifs = res.data;
          console.log(this.gifs);
      }, (err) => {
          console.log(err);
      });
  }
}
