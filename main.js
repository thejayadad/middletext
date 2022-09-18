
function middleNum(){
    let tx = input.value;
    let txlength = tx.length;
    if (txlength % 2 == 1){
        indexNum = txlength / 2;
        result.innerText = tx.charAt(indexNum);
        return;
    }
}