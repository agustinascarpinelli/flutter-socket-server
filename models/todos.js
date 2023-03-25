class Todos{
    constructor(){
        this.todos=[]
    }

    addTodo(todo=new Band()){
        this.todos.push(todo);
    }

    getTodos(){
        return this.todos
    }

    deleteTodo(id=''){
        this.todos=this.todos.filter(todo=>todo.id!==id);
        return this.todos
    }

    rankTodo(id=''){
        this.todos=this.todos.map(todo=>{
            if(todo.id==id){
                todo.rank++
                return todo;
            }else{
                return todo
            }
        })
    }

    unrankTodo(id=''){
        this.todos=this.todos.map(todo=>{
            if(todo.id==id){
                if(todo.rank>1){
                    todo.rank--
                    return todo
                }else{
                    return todo
                }
            }else{
                return todo
            }
        })
    }

}

module.exports=Todos;