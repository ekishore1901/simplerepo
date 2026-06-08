function myFunction() {
    console.log("hello. world");
}
myFunction();

let a= function mathi(){
    console.log("mathi anad valar");
}
a();

 let sum=(a,b) => { return a+b }
 console.log(sum(20,9));

//1 squre
 function squre(num){
    return num* num;
 }
 console.log(squre(2));

 //2 even odd
  function check(num){
    if(num%2==0){
        return "even";
    }
    else
        return "odd";
  }
  console.log(check(1));

  //3 max

  function max(a,b,c){

    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else{
        return c;
    }

}

console.log(max(10,25,75));

// 4 avg

function avg(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log(avg(10,20,30,40,50));

//5 cube
function cube(num){
    return num*num*num;
}
console.log(cube(2));
 
//6 pas neg zero

const checkNum = (num) => {

    if(num > 0){
        return "Positive";
    }
    else if(num < 0){
        return "Negative";
    }
    else{
        return "Zero";
    }

}

console.log(checkNum(-10));

// higher
function callfun(fun){

    fun();

}

function helloworld(){

    console.log("hello world");

}

callfun(helloworld);

//counter
let count = 0;
function inc() {
    count++;
    console.log(count);
}
inc();
inc();
inc();

//message
