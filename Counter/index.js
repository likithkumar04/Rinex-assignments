function incrementCnt(){
    let cnt;
    cnt = document.getElementById('counter');
    let incVal = cnt.innerHTML;
    incVal++;
    cnt.innerHTML = incVal;
}

function resetCnt(){
    let reset;
    reset = document.getElementById('counter');
    reset.innerHTML = 0;
}

function decrementCnt(){
    let decr;
    decr = document.getElementById('counter');
    let val = decr.innerHTML;
    val--;
    decr.innerHTML = val;
}