import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: String) {
    this.toDoList.push({
      title: title,
      isChecked: false
    })
  }

  checkOrUncheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
}
