function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = Math.random() > 0.5;
            if (condition) {
                resolve("Data fetched")
            }
            else {
                reject("Failed to fetch the data")
            }
        }, 2000)
    })
}


let elem = document.getElementById("fetchDataBtn")
elem.addEventListener("click", async () => {
    displayOutput(`Loading....`)
    elem.style.display = "none";
    await fun1().then((res) => {
        displayOutput(`Success : ${res}`)
    }).catch((err) => { displayOutput(`Failure : ${err}`) })
    elem.style.display = "block";
})
function displayOutput(message) {
    document.getElementById('output').innerHTML += `<p>${message}</p>`
}