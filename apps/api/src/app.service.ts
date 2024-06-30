import { Inject, Injectable,OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostTodoDTO, TodoServiceClient,TODO_SERVICE_NAME } from 'proto/todo';

@Injectable()
export class AppService implements OnModuleInit {
  
  private todoServiceClient: TodoServiceClient 
  constructor(@Inject('todo') private clientGrpc:ClientGrpc){}

  
  onModuleInit() {
    this.todoServiceClient = this.clientGrpc.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }


  getHello(): string {
    return 'Hello World!';
  }



  postTodos(request:PostTodoDTO){
     return this.todoServiceClient.postTodo(request)
  }

  getTodos(){
    return this.todoServiceClient.getTodos({})
  }

}
