const clickBtn = document.getElementById('click_btn');
const divContent = document.getElementById('divcontent');
// console.log(divContent)

// alert("hello")

const name = document.getElementById('name');
const paragraph = document.getElementById('paragraph');
const clickBtn2 = document.getElementById('click_btn2')
// console.log(nameValue)
// console.log(paragraph)

// console.log(name);

// function myFunction(){
    
//     const nameValue = name.value;
//     // alert(`Hello ${nameValue}`)
//     console.log("hello", nameValue)
//     alert(`Hello ${nameValue}`)
// }
function myFunction(){
    // console.log("hello")
    const nameValue = name.value;
    // console.log(name.value);
    alert(`Hello ${nameValue}`)
    // divContent.innerHTML = `<label for="exampleInputEmail1" class="form-label">Email</label>
    // <input type="email" class="form-control" id="email" value="azad@gmail.com">`;
}


clickBtn.addEventListener("click", myFunction)

function myFunction2(){
    console.log(name.value)
    paragraph.innerText = "Congratulations! Yes you are indian";
}
// innerHTML
clickBtn2.addEventListener("click", myFunction2)


//

const colorPicker = document.getElementById('colorPicker');
const box = document.getElementById('box');


//color change on button clicked 
// in style.css file background-color, margin-top, padding-top and in js file backgroundColor, marginTop, paddingTop
const colorchanger = document.getElementById('colorchanger');
colorchanger.addEventListener("click", function(){
    box.style.backgroundColor = colorPicker.value;
    // colorPicker.value = "#FF8585";
    // alert(`colorchanger clicked ${colorPicker.value}`)
})


//change color of box on input value change
box.style.backgroundColor = colorPicker.value;
colorPicker.addEventListener('change', function(){
    box.style.backgroundColor = colorPicker.value;
})

// const menuBar = document.getElementById('menuBar');
// const menuList = document.getElementById('menuList');

// menuBar.addEventListener("click", function(){
//     // menuList.style.display = "none";
//     // if(menuList.style.display == "none"){
//     //     menuList.style.display = "block";
//     // }else{
//     //     menuList.style.display = "none";
//     // }
//     if(menuList.style.left == "0"){
//         menuList.style.left = "500px";
//     }else{
//         menuList.style.left = "0";
//     }

// })

name.addEventListener('focus', function(){
    name.style.border = "1px solid red";
})
name.addEventListener('blur', function(){
    name.style.border = "1px solid black"
})


const dummytext = document.getElementById('dummytext');
// dummytext.innerText = "hello world how a re you";

// let sum = 7;

// sum = sum + 5;  //==> sum = 12;
// console.log(sum)
// const text = dummytext.innerHTML;


// console.log(text)
let gender = "female";

name.addEventListener('change', function(){
    if (gender === "male") {
        dummytext.innerHTML = "<h1>Hello Boy's how are you </h1>";
    }else{
        dummytext.innerHTML = "<h1>Hello girls how are you </h1>"
    }
    
})
if (gender === "male") {
    dummytext.innerHTML = "<h1>Hello Boy's how are you </h1>";
}else{
    dummytext.innerHTML = "<h1>Hello girls how are you </h1>"
}