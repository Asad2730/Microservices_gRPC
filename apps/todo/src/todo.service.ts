import { Injectable } from '@nestjs/common';
import {  PostTodoDTO, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos:Todo[] = [
    { id:1,description:'1st todo',isDone:false},
  ]
  
  postTodo(request: PostTodoDTO): Todo  {
    const todo:Todo = {
      id:this.todos.length+1,
      description:request.description,
      isDone:request.isDone
    }

    this.todos.push(todo)
    return todo
  }
  
  getTodos(): Todos {
      return {Todos:this.todos} 
  }

}
