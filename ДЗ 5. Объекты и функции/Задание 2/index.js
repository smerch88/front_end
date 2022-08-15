// 2 Реализовать функцию removeElement(array, item) чтобы удалить элемент item из массива array.

function removeElement(array=[1,2,3,4,5], item=5){
    if(array.includes(item)){
      array.splice(array.indexOf(item), 1);
      return array;
    }
    return "No such element in array"
}

console.log(`The new array: ${removeElement()}`)