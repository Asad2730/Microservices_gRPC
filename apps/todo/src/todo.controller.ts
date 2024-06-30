import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import {  PostTodoDTO, Todo, TodoServiceController, Todos } from 'proto/todo';
import { Observable } from 'rxjs';

@Controller()
export class TodoController implements TodoServiceController{
  constructor(private readonly todoService: TodoService) {}

  //TodoService is name of controller in Todo.ts file and postTodo is method name
  @GrpcMethod("TodoService","postTodo")
  postTodo(request: PostTodoDTO): Todo | Observable<Todo> | Promise<Todo> {
    return this.todoService.postTodo(request);
  }
  @GrpcMethod("TodoService","getTodos")
  getTodos(): Todos  | Promise<Todos> {
      return this.todoService.getTodos();
  }
  
  
}
