var b=97;
function Alphabet2()
{
    var x=String.fromCharCode(b)
    var A=document.getElementsById('alphabet')
    if(b<=122)
    {
        var str=x+" "
        A.innerHTML=str
        b=b+1
    }
   else
   {
       
   }           
}