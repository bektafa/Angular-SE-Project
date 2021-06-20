import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { AppState } from '../app.state';
import {
  AddDayily,
  DeleteDaily,
  EditDaily,
  GetDaily,
} from '../store/actions/dailys.action';
@Component({
  selector: 'app-daily-scrum',
  templateUrl: './daily-scrum.component.html',
  styleUrls: ['./daily-scrum.component.css'],
})
export class DailyScrumComponent implements OnInit {
  dailys: Observable<any>;
  dailyMode = false;
  URL: string = 'https://immense-ridge-56936.herokuapp.com/api/';

  addEmployeeScrumForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    time: new FormControl('', Validators.required),
  });

  searchEmployeeScrumForm = new FormGroup({
    searchNameScrum: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  ngOnInit(): void {
    this.dailys = this.store.select('dailys');
    this.getDaily();
  }

  getDaily() {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    };
    this.http
      .get(this.URL + 'arrivals', { headers: headers })
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.store.dispatch(new GetDaily(data));
      })
      .catch((err) => {
        console.log('00000' + err);
      });
  }

  addDaily() {
    this.store.dispatch(
      new AddDayily(
        this.addEmployeeScrumForm.controls.name.value,
        this.addEmployeeScrumForm.controls.time.value,
        1
      )
    );
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    };
    const body = JSON.stringify({
      name: this.addEmployeeScrumForm.controls.name.value,
      time: this.addEmployeeScrumForm.controls.time.value,
    });
    this.http
      .post(this.URL + 'arrivals', body, { headers: headers })
      .toPromise()
      .then((data: any) => {});

    this.addEmployeeScrumForm.reset();
  }
  /*
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
*/

  deleteDaily(i, daily) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    };
    this.http
      .delete(this.URL + 'arrivals/' + daily._id, { headers: headers })
      .toPromise()
      .then((data: any) => {
        this.store.dispatch(new DeleteDaily(i));
      });
  }
  /* 
deleteDelay(i) {
    this.store.dispatch(new DeleteDaily(i));
  }
*/
  editDelay(i) {
    this.dailyMode = i;
  }

  saveDaily(index, name, time, daily) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    };
    const body = JSON.stringify({ name: name, time: time });
    this.http
      .put(this.URL + 'arrivals/' + daily._id, body, { headers: headers })
      .toPromise()
      .then((data: any) => {
        this.store.dispatch(new EditDaily(index, name, time, 'Yes'));
        this.dismissDelay();
      });
  }
  /*
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
*/
  dismissDelay() {
    this.dailyMode = false;
  }
}
