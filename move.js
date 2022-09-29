function show(x)
{
 const q = Array.from(document.getElementsByClassName("question"));

 if (!document.getElementsByClassName("question")[x].classList.contains("showed"))
    {
    q.forEach (item => {
        item.className ="question"
    });
    document.getElementsByClassName("question")[x].classList.add("showed");
 }
else
 { q.forEach (item => {
        if (item.classList.contains("showed") )
         {item.classList.remove("showed");}
    });
 }
}