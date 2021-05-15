window.onload= function()
{
    var tab=document.getElementById("tab");
    var but= document.getElementById("btn");
    var tx=document.getElementById("addtext");
    tx.addEventListener('keypress',function(e){
          if (e.keyCode === 13 )
          {
              e.preventDefault();
              e.stopPropagation();
              addrow();
          }
    },false);
    but.addEventListener('click',addrow,false);
    tab.addEventListener('click',function(e){
        console.log(e.target);
        if (e.target.tagName.toLowerCase() == "i")
        {
            console.log("reached here");
            e.preventDefault();
            e.cancelbubble=true;
            deleterow(e);
        }
    },false);


}
var count=0;

function addrow()
{
    var txt=document.getElementById("addtext");
    if(txt.value.length !=0 )
    {
        count++;
        var r1=document.createElement('tr');
        var r2 = document.createElement('td');
        r2.className="cols1";
        var r3=document.createTextNode(txt.value);
        r1.id="tr"+count;

        var r4 = document.createElement('td');
        var r5= document.createElement('button');
        r5.className="desbtn";
        r5.innerHTML='<i class="fas fa-trash-alt"></i>';

        r4.appendChild(r5);
        r2.appendChild(r3);
        r1.appendChild(r2);
        r1.appendChild(r4);
        tab.appendChild(r1);
        txt.value="";
    }

}
function deleterow(e)
{
    
    var t1=e.target.parentNode.parentNode.parentNode;
    tab.removeChild(t1);
    
}
