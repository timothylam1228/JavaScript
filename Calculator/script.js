function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
}
function c(){
    document.form.textview.value="";
}
function divideMath(){
    insert('/');
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
var Trigo = false;
function piMath(){
    document.form.textview.value = document.form.textview.value+Math.PI;
}
var i = 0;
function TrigMath(syn){
    insert(syn+'(');
    i++;
}
function parentheses(syn){
    insert(syn);
}
function square(){
    var long = document.form.textview.value.length;
    insert('*');
    insert(document.form.textview.value.slice(long-1,long));
}