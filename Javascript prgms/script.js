// // // // // //Learning arithmetic operators
// // // // // let a = "2";
// // // // // let b = 2;
// // // // // console.log("a=", a, "b=", b);
// // // // // console.log("a + b =", a + b);
// // // // // console.log(a >= 2 && a === 2);
// // // // // a **= 2;
// // // // // console.log(a);
// // // // // //Learning subtraction operators
// // // // // console.log("a - b =", a - b);
// // // // // //Learning bitwise operators
// // // // // n = prompt("Enter a number");
// // // // // if (n % 5 == 0) {
// // // // //   alert(n, "Is an multiple of 5");
// // // // // } else {
// // // // //   console.log(n, "Not an multiple of 5");
// // // // // }
// // // // // let num = prompt("Enter your grades");
// // // // // if (num > 80) {
// // // // //   console.log("Distinction");
// // // // // } else if (num > 70) {
// // // // //   console.log("Good job");
// // // // // } else if (num > 60) {
// // // // //   console.log("Average");
// // // // // } else {
// // // // //   console.log("Failed");
// // // // // }
// // // // // for (let a = 1; a < 5; a++) {
// // // // //   if (a % 2 !== 0) {
// // // // //     continue;
// // // // //   }
// // // // //   console.log("Even numbers:", a);
// // // // // }
// // // // // let a = 20;
// // // // // do {
// // // // //   console.log(a);
// // // // //   a++;
// // // // // } while (a < 30);
// // // // // let nm = "Charan";
// // // // // for (let i of nm) {
// // // // //   console.log(i);
// // // // // }
// // // // // let list1 = {
// // // // //   name: "Charan",
// // // // //   roll: 20,
// // // // // };
// // // // // for (let i in list1) {
// // // // //   console.log(list1[i]);
// // // // // }
// // // // // let luck = 20;
// // // // // let num = prompt("Enter a number");
// // // // // while (luck != num) {
// // // // //   num = prompt("Wrong number so choose the right mu,ner");
// // // // // }
// // // // // console.log("Finally choose a correct answer");
// // // // // let str = "Hello world!";
// // // // // len = str.length;
// // // // // console.log("The type of string is ${len}");
// // // // // let obj = {
// // // // //   name: "pen",
// // // // //   cost: 20,
// // // // // };
// // // // // alert("The price of ${obj.name} is ${obj.cost}");
// // // // // str = "JEjdksjd";
// // // // // // console.log(str.toUpperCase());
// // // // // fullname = prompt("Enter full name");
// // // // // console.log("@", fullname, fullname.length);
// // // // // let marks = [85, 97, 44, 37, 76, 60];
// // // // // let total = 0;
// // // // // for (let i of marks) {
// // // // //   total += i;
// // // // // }
// // // // // console.log(total / 6);

// // // // // items = [250, 645, 300, 900, 50];
// // // // // let items1 = [];
// // // // // for (let i of items) {
// // // // //   dis = i * 0.01;
// // // // //   new1 = i - dis;
// // // // //   items1.push(new1);
// // // // // }
// // // // // console.log(items1.pop());
// // // // // console.log(items1);
// // // // // companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // // // // console.log(companies.shift());
// // // // // companies.splice(2, 1, "Ola");
// // // // // console.log(companies);
// // // // // console.log(companies.push("Amazon"));
// // // // // function func(x, y) {
// // // // //   console.log(x + y);
// // // // // }
// // // // // func();
// // // // const sum = (x, y) => {
// // // //   // arrow function
// // // //   return x * y;
// // // // };

// // // // // function vowel(word) {          // counts number of vowel
// // // // //   word = word.toLowerCase();
// // // // //   count = 0;
// // // // //   for (let i of word) {
// // // // //     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") count++;
// // // // //   }
// // // // //   console.log("Number of vowels = ", count);
// // // // // }

// // // // // const countvowels = (word) => { //call back function
// // // // //   word = word.toLowerCase();
// // // // //   count = 0;
// // // // //   for (let i of word) {
// // // // //     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") count++;
// // // // //   }
// // // // //   console.log("Number of vowels = ", count);
// // // // // };

// // // // arr = [1, 2, 3, 4, 5];
// // // // arr.forEach(function num1(num) {
// // // //   console.log(num);
// // // // });
// // // // arr1 = ["anil", "sumanth"];
// // // // arr1.forEach((val, idx, arr1) => {
// // // //   console.log(val.toUpperCase(), idx, arr1);
// // // // });

// // // // set = [1, 2, 3, 4, 5, 5];

// // // // const calc = (num) => {
// // // //   console.log(num * num);
// // // // };
// // // // set.forEach(calc);

// // // // // const map1 = set.map((val) => {
// // // // //   return val * 2;
// // // // // });
// // // // //map () method
// // // // // console.log(map1);

// // // // // let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
// // // // // const send = arr11.filter((val) => {
// // // // //   return val > 4;
// // // // // });
// // // // // console.log(send);

// // // // // const result = arr11.reduce((res, cur) => {
// // // // //   return res > cur ? res : cur; //redece() takes multiple inputs and produces an output
// // // // // });

// // // // // marks = [76, 89, 90, 76, 94];
// // // // // const res = marks.filter((val) => {
// // // // //   return val > 90;
// // // // // });
// // // // // console.log(res);

// // // // // let num = prompt("Enter your number");
// // // // // arr = [];
// // // // // for (i = 1; i <= num; i++) {
// // // // //   arr[i - 1] = i;
// // // // // }
// // // // // const sum1 = arr.reduce((res, val) => {
// // // // //   return res + val;
// // // // // });
// // // // // const mul = arr.reduce((res, val) => {
// // // // //   return res * val;
// // // // // });
// // // // // console.log(mul);
// // // // // console.log(sum1);

// // // // let ab = document.querySelector("h1");
// // // // console.dir(ab);
// // // // ab.innerText = ab.innerText + "From Apna COlleege";

// // // // let b1 = document.querySelectorAll(".box");
// // // // console.log(b1[0]);
// // // // b1[0].innerText = "HELLO";
// // // // b1[2].innerHTML = "<p>Hello im para</p>";

// // // // let para = document.querySelector("p");
// // // // para.innerText = "IM SUper";
// // // // para.style.color = "blue";

// // // // let sp = document.querySelector("p");
// // // // console.log(sp.setAttribute("id", "spl"));

// // // // div = document.querySelector("div");
// // // // div.style.backgroundColor = "blue";
// // // // div.style.fontSize = "14px";
// // // // div.innerText = "HEYYYY";

// // // // let a = [1, 2, 3, 4, 4];
// // // // const add = a.filter((val) => {
// // // //   if (val % 2 == 0) console.log(val);
// // // // });

// // // // let btn = document.createElement("button");
// // // // btn.innerText = "Click Me";
// // // // console.log(btn);
// // // // let ul = document.querySelectorAll("div");
// // // // ul[1].after(btn);

// // // // let newhead = document.createElement("h2");
// // // // newhead.innerHTML = "Hello im a h2 tag from JS";
// // // // document.querySelector("body").before(newhead);

// // // // let div1 = document.querySelectorAll("div");
// // // // // div1[0].remove();
// // // // // newhead.remove();

// // // // let lia = document.createElement("h2");
// // // // lia.innerHTML = "Hello im a h2 tag from JS";
// // // // let l = document.querySelector("ul");
// // // // l.removeChild(l.firstElementChild);

// // // // bt1 = document.createElement("button");
// // // // bt1.innerText = "click me";
// // // // bt1.style.backgroundColor = "red";
// // // // bt1.style.color = "white";
// // // // document.querySelector("body").before(bt1);

// // // // let para = document.querySelector("p");
// // // // let div = document.querySelector("div");

// // // // let bt = document.querySelector("#btn1");
// // // // let a = 0;
// // // // bt.onclick = () => {
// // // //   a++;
// // // //   bt.innerText = a;
// // // // };

// // // // let div = document.querySelector("#box1");

// // // // div.onmouseover = () => {
// // // //   console.log("Hovered meh");
// // // // };

// // // // let bt1 = document.querySelector("#btn1");
// // // // const handler3 = () => {
// // // //   console.log("HEYYYY");
// // // // };
// // // // bt1.addEventListener("click", handler3);
// // // // let a = 0;
// // // // bt1.addEventListener("click", () => {
// // // //   bt1.innerText = a++;
// // // // });

// // // // bt1.removeEventListener("click", handler3);

// // // let bt1 = document.querySelector("#btn1");
// // // let mode = "light";
// // // bt1.onclick = () => {
// // //   if (mode == "light") {
// // //     mode = "dark";
// // //     document.querySelector("body").classList.add("dark");
// // //     document.querySelector("body").classList.remove("light");
// // //   } else {
// // //     mode = "light";
// // //     document.querySelector("body").classList.add("light");
// // //     document.querySelector("body").classList.remove("dark");
// // //   }
// // //   console.log(mode);
// // // };
// // // // let pa = document.querySelector(".sample");
// // // // pa.addEventListener("onmouseover", () => {
// // // //   console.log("Hovered meh");
// // // // });

// // // // Select the element with the para class
// // // const paraElement = document.querySelector(".para");
// // // // Add a mouseover event listener
// // // paraElement.addEventListener("mouseover", function () {
// // //   console.log('Mouseover event triggered on paragraph with class "para"');
// // //   // Add any actions you want to perform here
// // //   // For example, you could change styles, show/hide elements, etc.
// // // });
// // let data1 = "This is the website data";
// // class User {
// //   constructor(name, email) {
// //     this.name = name;
// //     this.email = email;
// //   }
// //   viewData() {
// //     console.log("Website Data:", data1);
// //   }
// // }

// // const sample = () => {
// //   console.log("Sample function called");
// // };
// // // function data() {
// // //   return new Promise(() => {
// // //     console.log("Promise function called");
// // //   });
// // // }
// // // function word(){
// // //   return new Promise(()=>{
// // //     setTimeout(()=>{

// // //     },200);
// // //   })
// // // function Text1(man, newman) {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       // console.log("data", man);
// // //       // resolve("success");
// // //       reject("Error");
// // //       if (newman) {
// // //         newman();
// // //       }
// // //     }, 4000);
// // //   }); ///////

// // // sample(123, 111);
// // //callback hell
// // // Text1("Charan", () => {
// // //   Text1("S", () => {
// // //     Text1("K", () => {
// // //       Text1("J", () => {
// // //         Text1("Naam");
// // //       });
// // //     });
// // //   });
// // // });

// // let promise = new Promise((resolve, reject) => {
// //   console.log("Promised");
// //   reject();
// // });
// // class User11 {
// //   viewData() {
// //     data1 = "Hello Im View Dataa";
// //     console.log(data1);
// //   }
// // }
// // class Admin extends User11 {
// //   constructor(name, email) {
// //     super(name, email);
// //   }
// //   editData() {
// //     data1 = "New iNFO";
// //   }
// // }

// // let admin = new Admin("Charan", "charan@gai,com");

// // // const getpromise = () => {
// // //   return new Promise((resolve, reject) => {
// // //     // console.log("PROMSIE");
// // //     reject("newtowrk");
// // //   });
// // // };
// // // let p1 = getpromise();
// // // p1.then((r) => {
// // //   console.log("Promised fulsiled ", r);
// // // });
// // // p1.catch((re) => {
// // //   console.log("CAUGHT", re);
// // // });

// // function async1() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("PRINTED");
// //       resolve("SUCCESS");
// //     }, 4000);
// //   });
// // }

// // function async2() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("PRINTED");
// //       resolve("SUCCESS");
// //     }, 4000);
// //   });
// // }

// // // console.log("Fetching data 1");
// // // let p1 = async1();
// // // p1.then((res) => {
// // //   console.log("Promised fulsiled ", res);
// // // });

// // // console.log("Fetching data2");
// // // let p2 = new async2();
// // // p2.then((res) => {
// // //   console.log("Perfect", res);
// // // });
// // // Create a chain of then()
// // console.log("Fetching data1");
// // let p1 = async1();
// // p1.then((res) => {
// //   console.log(res);
// //   console.log("Fetching data2");
// //   p2 = async2();
// //   p2.then((res) => {
// //     console.log(res);
// //   });
// // });

// // //callback chain or Promise chain
// function callback(word) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(word);
//       resolve("Solved");
//     }, 8000);
//   });
// }

// // //new callback chain
// // callback("A")
// //   .then((res) => {
// //     console.log(res);
// //     return callback("B");
// //   })
// //   .then((res) => {
// //     console.log(res);
// //   });

// //async and await
// async function callup() {
//   console.log("Getting A");
//   await callback("A");
//   console.log("Getting B");
//   await callback("B");
// }
// callup();
// // // let obj1 = callback("A"); //onject1
// // // obj1.then((res) => {//automatic method
// // //old callback chain
// // // callback("A").then((res) => {
// // //   console.log("Executing once");
// // //   console.log(res);
// // //   console.log("Executing Twice");
// // //   let obj2 = callback("B");
// // //   obj2.then((res) => {
// // //     console.log(res);
// // //     console.log("Executing thrice");
// // //     let obj3 = callback("C");
// // //     obj3.then((res) => {
// // //       console.log(res);
// // //     });
// // //   });
// // // });

// ///sample async function
// async function Hello() {
//   console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello");
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getdata() {
//   await api();
//   await api();
// }

//a function
function data(word, word1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(word);
      resolve("Success");
      if (word1) {
        word1();
      }
    }, 2000);
  });
}
// //callback hell
// console.log("HERE IS CALLBACK HELL");
// data("A", () => {
//   data("B", () => {
//     data("C", () => {
//       data("D");
//     });
//   });
// });
// //promise chain

// data("Word1")
//   .then((res) => {
//     console.log(res);
//     return data("Word2");
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("THIS IS PROMISES CHAIN");
//     return data("Word3");
//   });
//async and await
// here whenever async() is created you need to call the function
// async function newm() {
//   console.log("Waits for A");
//   await data("A");
//   console.log("Waits for B");
//   await data("B");
//   console.log("Waits for C");
//   await data("C");
// }

//to avoid calling async() we use IIFE(Immediately Invoked Function Expression)
(function () {
  console.log("HEY IM CALLED AUTOMATICALLY");
})();
(async () => {
  await data("A");
  await data("B");
  await data("C");
})();

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

//AJAJ Asynchronous Javascript and JSON ( Javascript Object Notation)
//Cross-Origin Resource Sharing(CORS)
//// const URL = "https://api.api-ninjas.com/v1/facts";
// const para1 = document.querySelector(".p");
// const getFacts = async () => {
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data[0].image);
//   para1.innerHTML = data[0];
// };
const URL = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("#button1");
button.addEventListener("click", getImage);
const img = document.querySelector(".content");
async function getImage() {
  response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data[0]);
  img.innerText = data[0].width;
}
