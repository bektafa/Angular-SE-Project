import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import {
  AddDayily,
  DeleteDaily,
  EditDaily,
} from '../store/actions/dailys.action';
@Component({
  selector: 'app-daily-scrum',
  templateUrl: './daily-scrum.component.html',
  styleUrls: ['./daily-scrum.component.css'],
})
export class DailyScrumComponent implements OnInit {
  dailys: Observable<any>;
  dailyMode = false;

  addEmployeeScrumForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    time: new FormControl('', Validators.required),
  });

  searchEmployeeScrumForm = new FormGroup({
    searchNameScrum: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dailys = this.store.select('dailys');
  }

  addEmployeeScrum() {
    const time = this.addEmployeeScrumForm.controls.time.value;
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    var onTime = 'Yes';
    if (
      (parseInt(hours) === 8 && parseInt(minutes) > 45) ||
      parseInt(hours) > 8
    ) {
      onTime = 'No';
    }
    this.store.dispatch(
      new AddDayily(
        this.addEmployeeScrumForm.controls.name.value,
        this.addEmployeeScrumForm.controls.time.value,
        onTime
      )
    );
  }

  deleteDelay(i) {
    this.store.dispatch(new DeleteDaily(i));
  }

  editDelay(i) {
    this.dailyMode = i;
  }

  saveDaily(i, name, time) {
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    var onTime = 'Yes';
    if (
      (parseInt(hours) === 8 && parseInt(minutes) > 45) ||
      parseInt(hours) > 8
    ) {
      onTime = 'No';
    }
    this.store.dispatch(new EditDaily(i, name, time, onTime));
    this.dismissDelay();
  }

  dismissDelay() {
    this.dailyMode = false;
  }
}
