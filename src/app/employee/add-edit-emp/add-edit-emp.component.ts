import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  ActivateAddEditDepComp: boolean | undefined;
  

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string | undefined;
  EmployeeName:string | undefined;
  Department:string | undefined;
  DateOfJoining:string | undefined;
  PhotoFileName:string | undefined;
  PhotoFilePath:string | undefined;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }
 
  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
     
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
    DateOfJoining:this.DateOfJoining,
  PhotoFileName:this.PhotoFileName};

    this.service.updateEmployee(val).subscribe(res=>{
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