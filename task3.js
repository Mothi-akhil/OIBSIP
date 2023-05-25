const input=document.getElementById('txt');
const list=document.getElementById('list');

function Add()
{ 
    if(input.value==='')
    {
        alert('write something to add task');
    }
   else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    let ai=document.createElement("button");
    ai.innerHTML="Delete";
    li.appendChild(ai);
    ai.onclick=function(){
        li.remove();
    };

 }
    input.value='';
}

