var exp=document.getElementById('txt').value;
function buildExpression(value)
{
    exp=exp+value;
    document.getElementById('txt').value=exp;
    
}
function clearrr()
{
    exp=" ";
    document.getElementById('txt').value=exp;
}
function calculate()
{
    document.getElementById('txt').value=eval(exp);
}
function sqroot()
{
    document.getElementById('txt').value=Math.sqrt(exp);
}
function del()
{
    exp=exp.substring(0,exp.length-1);
    document.getElementById('txt').value=exp;
}