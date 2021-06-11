//document.write("hi anuj");

//this is a dom model in javascript

 var element;
// element = document.title;
// console.log(element);

// element = document.head;
// console.log(element);

// element = document.body;
// console.log(element);

//element=document.getElementById("a").innerText;
//element=document.getElementById("a").innerHTML;
//element=document.getElementById("a").getAttribute("style");
//element=document.getElementById("a").getAttributeNode("style");
element=document.getElementById("a").attributes[0];
console.log(element);