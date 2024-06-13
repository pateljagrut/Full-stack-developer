localStorage.setItem("Name", "Jhon&")
let localitem = localStorage.getItem("Name");
document.getElementById("local").innerHTML = `<h3>${localitem}</h3>`
localStorage.setItem('key2', [1, 2, 3, 4].toString());
localStorage.setItem('key3',JSON.stringify([1,2,3,4]));
