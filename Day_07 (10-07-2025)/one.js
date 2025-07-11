console.log(document.getElementById("id1").innerHTML);
document.getElementById("p1").style.color="#36c288"
document.getElementsByClassName("box1")[0].style.borderRadius="10px";
document.getElementById("p2").style.fontSize="24px";
function myfunc(){
    document.getElementById("b1").innerHTML="Wow you did it!";
    setTimeout(() => {
        alert("Eeee you have been fooled");
    }, 2000);
}

//event Listener
document.querySelector(".box3 button").addEventListener("click",function(){
    document.querySelector(".box3 p").innerHTML="Hii This is RaajaSree, Training to become a Software Engineer in Amadis.";
});

//Calculator
// document.querySelector(".calc #bt1").addEventListener("click",function(){
// const add_1=document.getElementById("in1").value;
// const add_2=document.getElementById("in2").value;
// const add=Number(add_1) + Number(add_2);
// document.querySelector(".calc h3").innerHTML="Output:";
// document.querySelector(".calc h3").innerHTML+=Number(add);
// })

// document.querySelector(".calc #bt2").addEventListener("click",function(){
// const sub_1=document.getElementById("in1").value;
// const sub_2=document.getElementById("in2").value;
// const sub=Number(sub_1) - Number(sub_2);
// document.querySelector(".calc h3").innerHTML="Output:";
// document.querySelector(".calc h3").innerHTML+=Number(sub);
// })

// document.querySelector(".calc #bt3").addEventListener("click",function(){
// const mul_1=document.getElementById("in1").value;
// const mul_2=document.getElementById("in2").value;
// const mul=Number(mul_1) * Number(mul_2);
// document.querySelector(".calc h3").innerHTML="Output:";
// document.querySelector(".calc h3").innerHTML+=Number(mul);
// })

// document.querySelector(".calc #bt4").addEventListener("click",function(){
// const div_1=document.getElementById("in1").value;
// const div_2=document.getElementById("in2").value;
// const div=Number(div_1) / Number(div_2);
// document.querySelector(".calc h3").innerHTML="Output:";
// document.querySelector(".calc h3").innerHTML+=Number(div);
// })


//Optimixed method
const input={
    in1:document.getElementById("in1"),
    in2:document.getElementById("in2"),
}

const output=document.querySelector(".calc h3");

function Calculate(op){
    const num1=Number(input.in1.value.trim());
    const num2=Number(input.in2.value.trim());

let result;
switch(op){
    case "add":
        result=num1+num2;
        break;
    case "sub":
        result = num1 - num2;
        break;
    case "mul":
        result=num1 * num2;
        break;
    case "div":
        if(num2===0){
            output.textContent="Output cannot be divised by zero";
        }
        result=num1 / num2;
        break;
}
output.textContent = "Output: " +result;
}

document.querySelectorAll(".calc button").forEach(button => {
    button.addEventListener("click",()=>{
        const id = button.id;
        if(id=="bt1") Calculate("add");
        else if (id=="bt2") Calculate("sub");
        else if (id=="bt3") Calculate("mul");
        else if(id=="bt4") Calculate("div");
    });
    
});


//append

// const newNode=document.createElement("li");
// const node=document.createTextNode("Vapour");
// const node1=document.createTextNode("Solid");
// newNode.appendChild(node);
// // newNode.appendChild(node1);
// const list=document.getElementById("mylist");
// list.appendChild(newNode);\


const list1 =document.getElementById("mylist");
const newNode1=document.createElement("li");
newNode1.innerText="Vapous";
list1.append(newNode1)

const last=document.getElementById("mylist2").lastElementChild;
const n1=document.getElementById("mylist");
n1.insertBefore(last,n1.children[2]);

//Attributes
// let nmap=document.getElementById("id3").attributes;
// let text=" ";
// for(let i=0;i<=nmap.length;i++){
//     text+=nmap[i].name + "is" + nmap[i].value +"<br>";
// }

// document.getElementById("de").innerHTML=text;


function fun(){
    let li=document.getElementById("i5").classList.add("my")
}

//get attributes
let att=document.getElementById("myAnchor").getAttribute("href");
document.getElementById("demo").innerHTML=att;

function show(){
    var x="local";
    return x
}