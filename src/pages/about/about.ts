import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}
  
  title = 'TO DO APP';
  //taskList : string[] = ["Task1","Task2","Task3"];
  taskList = JSON.parse(localStorage.getItem("list")) || []; 
  //agr localStorage m koi list hai to wo store krwado taskList me nhi hai to empty array declare krdo
  newTask : string;
  index : number;
  editFlag : boolean = false;

  checker() : boolean { // chk for empty field and whitespace
    if(this.newTask && this.newTask !== ' ') { 
      return true;
    }
    else if(!this.newTask || this.newTask === ' ') {
      return false;
    }
  }

  addTask() {
      if(this.editFlag === true) { //edit Task
        this.taskList.splice(this.index ,1, this.newTask);
        localStorage.setItem("list",JSON.stringify(this.taskList)); 
        this.editFlag = false;
        this.newTask = '';
      }
      else if (this.editFlag === false) { // add Task
        this.taskList.push(this.newTask);
        localStorage.setItem("list",JSON.stringify(this.taskList));
        this.newTask = '';
      }
}
  dltTask(i) {
    this.taskList.splice(i,1); //i = index of task where dlt button was clicked
    localStorage.setItem("list",JSON.stringify(this.taskList)); 
  }

  editTask(eTask, i) {
    this.editFlag = true;
    this.index = i;
    this.newTask = eTask; // loaded task in input field 
  }

}
