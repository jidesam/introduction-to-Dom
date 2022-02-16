let a = document.getElementById("name");
console.log(a);
a.style.color ="red";
console.log(a);
a.style.fontSize ="40px"
console.log(a);


let myForm = document.getElementsByTagName("input")
console.log(myForm[2].value)
for(let i =0; i < myForm.length; i++){
    let b = myForm[i];
    console.log(b.value)
}