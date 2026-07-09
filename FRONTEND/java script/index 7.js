class human{
    age = 25;
    #wt = 70;
    ht = 180;

    constructor(newage, newheight,newweight){
        this.age = newage;
        this.ht = newheight;
        this.#wt = newweight;
    }

    walking(){
        console.log('I am walking', this.#wt)
    }
    running(){
        console.log('I am running')
    }

    get fetchweight(){
        return this.#wt;
    }
    set modifyweight(val){
        this.#wt = val;
    }
}
let obj = new human(34,185,75);
console.log(obj.ht)
obj.walking();
