import { Component,ViewChild } from '@angular/core';
import { NavController,List } from 'ionic-angular';
import {Tasks} from './task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(List) list:List;
  task:string='';
public tasks : Tasks[];
  constructor(public navCtrl: NavController) {
    debugger;
    this.tasks=[
      {id:1,title:"First Task",isEdit:false,idDone:false},
      {id:2,title:"Second Task",isEdit:false,idDone:false}
    ]
  }
  //add task
  addTask(){
    debugger;
    this.tasks.push(new Tasks(this.task));
  }
  //delte task
  deleteTask(id){
this.tasks.splice(id,1);
  }
  //edit task
  editTask(task){
task.isEdit=!task.isEdit;
this.list.closeSlidingItems();
  }


}
