

let que1=()=>
{
    let str1="javascript is a sun";
    let para1=document.querySelector("#que1");
    if(str1.includes("sun")==true)
    {
        para1.innerHTML="true";
    }
    else
    {
        para1.innerHTML="false";
    }
}
que1();

let que2=()=>
{
    let para11=document.querySelector("#name");
    let name=prompt("enter your name");
    let con=confirm("are display your name on screen");
    if(con==true)
    {
      para11.innerHTML=name;
    }
}
que2();


let que3=()=>
{
    let para22=document.querySelector("#counter");
    let para23=document.querySelector("#inc");
    let para24=document.querySelector("#dec");
    let count=0;
    para22.innerHTML=count;
    para23.addEventListener("click",function()
  {
    count=count+5;
    para22.innerHTML=count;
  })
  para24.addEventListener("click",function()
  {
    count=count-5;
    para22.innerHTML=count;
  })
    
}
que3();


let que4=()=>
{
    let para25=document.querySelector(".img");
    let para26=document.querySelector("#img1");
    let para27=document.querySelector("#img2");
    para25.style.backgroundImage="url('photo.png')";

    para26.addEventListener("click",function()
{
    para25.style.backgroundImage="url('main_image1.webp')";
    para27.addEventListener("click",function()
{
    para25.style.backgroundImage="url('photo.png')";
})

})

}
que4();



let que5=()=>
{
    let arr=[""];
    for(let i=0; i<5; i++)
    {
       let no=Number(prompt(`enter ${i} index number`));
       arr[i]=no;
    }
    alert(arr);
}
que5();


let que6=()=>
    {
       
        let para29=document.querySelector("#btn");
        let para30=document.querySelector("#res");
    
       para29.addEventListener("click", function()
      {
        let no1=document.querySelector("#num").value;
        let table="";
        for(let i=1; i<=10; i++)
        {
             table+=(no1*i);
            para30.innerHTML=table+"";
        }
    })
    }
    que6();