//create a function
//
function removeDuplicates(array){
    let dup = [];
    for (let i=0; i<array.length ; i++){
        // let num = array[i];
        for (j = 1; j<array.length; j++){
            if (array[j] === array[i]){
                if(!dup.includes(array[i])){
                dup.push(array[i]);
                }
            }
        }
    }
   console.log(dup);
}
removeDuplicates([1,2,1,1])