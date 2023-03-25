const {v4:uuidV4}=require('uuid')

class Todo{
    constructor(name='no-name'){
        this.id=uuidV4(); 
        this.name=name;
        this.rank=1;
    }
}

module.exports=Todo;