// document.getElementById('htmlimage').src = "OIP.jpeg"
function fun(){
    alert("working...")
}
function click() {
    document.getElementById('text').textContent="changed"
}
function vishal(){
      
}
var num = 0
function counter(){
    document.getElementById('count').textContent = ++num
}
function counter1(){
    if(num>0){
       document.getElementById('count').textContent = --num
    }
    else{
        alert("o")
    }  
}
function counter2(){
    
    document.getElementById('count').textContent = num =0
}