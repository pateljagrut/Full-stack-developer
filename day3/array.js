let arr1 = [1, 2, "Aray", 5, 6, 7];
console.log("array", arr1);
let myobj = [
    {
        name: "Jagrut",
        phone: '1234567890',
        authorized: true
    },
    {
        name: "Neel",
        phone: '1023654789',
        authorized: true
    },
]
let arr = myobj.filter((index) => index.authorized);
console.log(myobj, arr);