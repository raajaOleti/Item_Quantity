var num = 0;
function inc()
{
    num++;
    if(num<=30)
    {
        document.getElementById("input").value=num;
        if(num==30)
        {
            document.getElementById("hh").innerHTML="YOU CAN ADD ONLY 30 ITEMS"
        }
    }
    else{
        num = 30;
    }
}
function dec(){
    num--;
    if(num>0)
    {
        document.getElementById("input").value=num;
    }
    else{
        num =0;
    }

}

