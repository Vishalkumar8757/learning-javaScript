function click() {
    document.getElementById('text').textContent="my name is vishal"
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
 document.querySelector('#colour').style.color = "red"
 document.querySelector('#colour1').style.color = "yellow"
 document.querySelector('#colour2').style.color = "blue"

 function img(){
    document.getElementById('image').src='OIP (1).jpeg'
 }
 function img1(){
    document.getElementById('image').src='OIP.jpeg'
 }