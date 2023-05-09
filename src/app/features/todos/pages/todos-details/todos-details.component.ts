import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { TodosFacadeService } from 'src/app/shared/facade/todos-facade.service';
import { TodoState } from 'src/app/shared/types/todo.type';

@Component({
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {
  todoState!: TodoState
  constructor(private activatedRoute: ActivatedRoute, private todoFacade: TodosFacadeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map( params => params.id),
      switchMap(todoId => this.todoFacade.getTodoById(todoId))
    ).subscribe((todoState) => {
      this.todoState = todoState
    }
    )
  }

}
