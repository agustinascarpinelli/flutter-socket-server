const {io}=require('../index.js');
const Todo = require('../models/todo.js');
const Todos =require ('../models/todos')
const todos=new Todos();



//Mensajes de sockets

io.on('connection',client=>{
    console.log("Cliente conectado")
    client.emit('active-todos',todos.getTodos())
      client.on('disconnect',()=>{
          console.log('Client disconnected')
      })
  
  
    //Puntuar un todo
  client.on('rank-todo',(payload)=>{
     todos.rankTodo(payload.id);
     client.emit('active-todos',todos.getTodos());
     //io.emit('active-todos',todos.getTodos())
  })
  client.on('unRank-todo',(payload)=>{
    todos.unrankTodo(payload.id);
    client.emit('active-todos',todos.getTodos());
    //io.emit('active-todos',todos.getTodos())
 })


  //Agregar un nuevo todo
  client.on('new-todo',(payload)=>{
    let todo=new Todo(payload.name)
    
    todos.addTodo(todo);
    
    client.emit('active-todos',todos.getTodos())
  })

  //Borrar un todo
  client.on('delete-todo',(payload)=>{
    todos.deleteTodo(payload.id)
    client.emit('active-todos',todos.getTodos())
  })

  client.on('new-message',(payload)=>{
    client.broadcast.emit('new-message', payload);
  })
  
  
  })
  