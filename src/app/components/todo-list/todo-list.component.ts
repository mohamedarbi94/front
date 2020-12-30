import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
  
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listtodo :any; 
  todo: Todo;
  curr_todo: any ;
 // addForm: FormGroup;
  obj: any;
 
  public  dbs ;
  operation : string = 'Add';
  selectedbs :Todo ;

  constructor(private route: ActivatedRoute,private http: HttpClient, private formBuilder :FormBuilder,private router:Router,
    private todoService:TodoService) {
      

     }

 /*
     updatePropertiesToDo(){
       
      this.obj ={"id":this.addForm.get('id').value,"description":this.addForm.get('description').value}
      this.todoService.update(this.obj).subscribe(data=>{
        this.todoService.readAll().subscribe(data=>{
          this.listtodo=data;
        })

      })


     }
 */ 

  ngOnInit() {
    this.todoService.readAll().subscribe(data=>{
      this.listtodo=data;
    })
     
  }
  

  createtodo(id, description) {
    this.todo = { id: id, description: description }
    this.todoService.create(this.todo).subscribe(e => {
      console.log("aaaa")
      this.todoService.readAll().subscribe(data=>{
        console.log("tttttttttttttttttttt")
        this.listtodo=data;
      })
    })
  }

    loadtd(){

      return this.todoService.readAll()
        .subscribe(
          res=>{this.dbs= res.body ? res.body : [];
            
            } 
             ,error=>{console.log(error);});
            }

  deleteToDo(id, description) {
    this.todo = { id: id, description: description };
    this.todoService.delete(this.todo)
      .subscribe(data => {
        this.listtodo=data;
      })
  }
              
  update(id, description){
    this.todo = { id: id, description: description };
    this.todoService.update(this.todo).
    subscribe(data=>{
      this.listtodo=data;
    })
    }

    details(id : string){

      this.router.navigate(['details',id]);
      }
  
    

}
