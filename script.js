// let arr = ['Hello', 'Hi', 'everybody','world']
// console.log(arr.reduce((acc, el) => {
//     return Math.max(acc, el)
//     return acc > el ? acc : el
//     return acc.length < el.length ? acc : el
// }))



// let arr = ['Nurtilek', 'Abdullaeva', 'Khabibillaev', 'Elmara', ]
// console.log(arr.reduce((acc, el) => {
//     return el[0] + acc.slice(1) + ' ' + acc[0] + el.slice(1)
// }))



// let arr = [-19, 20, 13, -2, 51, -24, 17, 12]
// const sum = (num) => {
//     let posNumber = num.filter(el => el > 0 && el % 2 === 0)
//     return posNumber.reduce((acc, elem) => {
//         return (acc, elem ** 2) + (acc + elem)
//     })
// }
// console.log(sum(arr))




// let arr = ['Hellooooooooooooooooooo', 'everybody', 'welcome', 'too', 'this', 'world!']
// let long = arr.reduce((acc, el) => (acc.length > el.length ? acc : el));
// let short = arr.reduce((acc, el) => (acc.length < el.length ? acc : el));
// console.log(long[0].toUpperCase() + long.slice(1, -1).toLowerCase() + long[long.length - 1].toUpperCase());
// console.log(short[0].toLowerCase() + short.slice(1, -1).toUpperCase() + short[short.length - 1].toLowerCase());




// function generateHashtag(str) {
//   let result = str
//     .split(" ")
//     .filter((elem) => {
//       return elem !== "" && elem !== " ";
//     })
//     .map((el) => {
//       return el !== " " ? el[0].toUpperCase() + el.slice(1) : false;
//     })
//     .join("");
//   let hashtag = "#" + result;
//   return str && result && result.length < 140 ? hashtag : false;
// }


let arr = "motion web IT academy" 
const enter = (str) => {
    let result = str.trim(' ').split(' ').filter(el => {
        return el !== el.toUpperCase()
    }).map(el => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase()
    }).join('')
    return result !== ' '.replace(result.length) && result !== '' ?  '#' + result : false 
}
console.log(enter(arr)) 

