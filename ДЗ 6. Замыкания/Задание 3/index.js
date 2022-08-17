// 3. Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


function delSymbols(str = "hello world", delEl = ['l', 'd']){
    let strArr = str.split("");
    let result = strArr.reduce( (acc, item) => {if (!delEl.includes(item)) acc.push(item); 
    return acc;} , []);
                    
    return result.join('');
}

answer = delSymbols();
console.log(answer)