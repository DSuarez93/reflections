btnClr.onclick=function() {
    res.innerHTML = "";
}
btnEql.onclick=function() {
    var s = res.innerHTML;
    let c = s.split(/[\+\-\*\/]/);
    let a = parseInt(c[0], 2);
    let b = parseInt(c[1], 2);
    c = s.match(/[\+\-\*\/]/);
    s = parseInt(eval(a+c+b));
    res.innerHTML = s.toString(2);
}
btn0.onclick=function() {
    res.innerHTML += 0;
}
btn1.onclick=function() {
    res.innerHTML += 1;
}
btnSum.onclick=function() {
    res.innerHTML += "+";
}
btnSub.onclick=function() {
    res.innerHTML += "-";
}
btnMul.onclick=function() {
    res.innerHTML += "*";
}
btnDiv.onclick=function() {
    res.innerHTML += "/";
}