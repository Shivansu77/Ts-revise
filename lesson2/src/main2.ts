let stringArr = ['one','two','three'];
let guitars = ['Strat','Les Paul','Les Paul Custom'];
let mixedData = ['EVH',1984,true];

stringArr[0]= 'john';
stringArr.push('hey');

guitars[0]='Jim';
guitars.unshift('Jim');

let test = [];
let bands: string[]=[];
bands.push('Van Halen');
// bands.push(true); // This line will cause a type error because 'true' is not a string

//tuples
let myTuple:[ string ,number,boolean]= ['hello', 42, true];

let mixed = ['john',1,true];
mixed = myTuple; // This is allowed because myTuple has compatible types
//myTuple = mixed; // This line will cause a type error because mixed is not a tuple of the correct types

//objects 
let myObj:object;
myObj= [];
console.log(typeof myObj);


const exampleObj={
    prop1: 'john',
    prop2: true,
    prop3: 42
}

//exampleObj.prop1=false; 
console.log(exampleObj.prop1);

type Guitarist={
    name?:string,
    active:boolean,
    albums:(string|number)[]
}

let evh:Guitarist={
    name:'Eddie',
    active:false,
    albums:[1984,'OU812', 'For Unlawful Carnal Knowledge', 'Balance', 5150]
}

let jp:Guitarist={
    active:true,
    albums:['I','II','III','IV']
}   

const greetGuitarist=(guitarist:Guitarist)=>{
    if(guitarist.name){
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));