// counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}