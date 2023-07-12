let count = 0;

document.getElementById('increaseBtn').onclick = function(){
    count+= 1;
    document.getElementById('label').innerHTML = count;
}
document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('label').innerHTML = count;
}
document.getElementById('decreaseBtn').onclick = function(){
    count-=1;
    document.getElementById('label').innerHTML = count;
}