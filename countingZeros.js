// counting the total number of zeros from 1 to n
function countingZeros(n) {
    // creating an empty string
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += i;
    }
    console.log(str.split(0).length -1);
    // return (str.split(0) -1);
}

countingZeros(1000);