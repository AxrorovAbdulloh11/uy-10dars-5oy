let arr = ["Aziz", "Sardor", "Abror"];
let ism = confirm('Salom Arrayingizdan bitta elementni olib tashlansinmi?');



console.log(arr);

if (ism === true) {
    arr.shift(ism);
    alert(`Arrayingizda ${arr.length} ta element qoldi.`);
} else {
    alert(`Arrayingizda ${arr.length} ta element qoldi.`);
    console.log(arr)
}


