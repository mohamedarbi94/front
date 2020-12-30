import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  id: string;
  t: Todo;

  constructor(private route: ActivatedRoute,private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
    
    this.t = new Todo();

    this.id = this.route.snapshot.params['id'];
    
    this.todoService.getTodo(this.id)
      .subscribe(data => {
        console.log("hereeeee")
        console.log(data+"dataaa")
        this.t = data;
      }, error => console.log(error));
  }

}
