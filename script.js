let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function bushControl(arr) {

    let dangeriousItems = arr.some(item => (item !== "pink"));
    console.log(dangeriousItems)

    if (dangeriousItems) {
        console.log("it is not safe")
    } else {
        console.log("it is safe")
    }
}

bushControl(bushBerryColours1);
bushControl(bushBerryColours2);

/*
function bushControl4(arr) {

    let dangeriousItems = arr.every(item => (item === "pink"));
    console.log(dangeriousItems)

    if (dangeriousItems) {
        console.log("it is safe")
    } else {
        console.log("it is not safe")
    }
}

bushControl4(bushBerryColours1);
bushControl4(bushBerryColours2);
*/