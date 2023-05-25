import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  ActivateAddEditDepComp: boolean | undefined;
 
 

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
  refreshDepList() {
    throw new Error('Method not implemented.');
  }


  
  textInput!: string;
  emptyError!: boolean;
  numberError!: boolean;

  validateInput() {
    if (this.textInput === '') {
      this.emptyError = true;
      this.numberError = false;
    } else if (/\d/.test(this.textInput)) {
      this.emptyError = false;
      this.numberError = true;
    } else {
      this.emptyError = false;
      this.numberError = false;
    }
  }







  
 
}
