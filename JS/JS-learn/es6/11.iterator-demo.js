// let ids = [9000, 9001, 9002];


// // let it = ids[Symbol.iterator]();


// // for (let id of ids) {
// //     console.log(id);
// // }


// var newArray = [1, 2, ...ids]; // spread

// var [id1, id2, id3] = ids; // destructuring

//-------------------------------------------


// var idMaker = {

//     [Symbol.iterator]: function () {
//         var id = 1;
//         return {
//             next: function () {
//                 id++;
//                 return {
//                     value: id,
//                     done: false
//                 }
//             }
//         };
//     }
// };



// let idMaker = {
//     [Symbol.iterator]() {
//         let nextId = 8000;
//         return {
//             next() {
//                 let value = nextId > 8002 ? undefined : nextId++;
//                 let done = !value;
//                 return {
//                     value,
//                     done
//                 };
//             }
//         };
//     }
// };
// for (let v of idMaker) console.log(v);





// function *process() {
//     yield 8000;
//     yield 8001;
// }


// let it = process();

// console.log(it.next());



function* process() {
    let nextId = 7000;
    while (true) {
        yield(nextId++);
    }
}
