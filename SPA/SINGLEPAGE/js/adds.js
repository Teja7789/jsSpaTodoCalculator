
function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value
    console.log(x,"x");
    let y = eval(x);//5+2
    console.log(y,"y");

    document.getElementById('result').value = y //7

    return y //7

}
function clearScreen(){

    document.getElementById('result').value = ''

}