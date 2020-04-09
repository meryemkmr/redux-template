// let state = {
//     clicks: 0,
//     count:0
// }
// let newState = {
//     ...state,
//     clicks: state.clicks + 1

// }
// newState = state
// newState['count'] = 2
// console.log(state)
// console.log(newState)

// <==============================================>
// let a = [1,2,3,4,5]
// let b = a

// b[0] = 10
// console.log(a)
// console.log(b)


// <======================================================>

// Nested Object


// let state = {
//     house:{
//         name: 'Enclave',
//         points:67
//     },
//     location: "Houston"
// }

// let newState ={
//     ...state,
//     house:{
//         ...state.house,
//         points: state.house.points + 2
//     },
//      ...this.location,
//      location: 'Dallas'


// }

// console.log(state)
// console.log(newState)

// <===================================================>
// let state = {
//     school:{
//         name: 'Harmony',
//     },
//     house:{
//         name: 'Science',
//         points: 12
//     }
// }
// let newState = {
//     ...state,
//     school:{
//         ...state.school,
//         name: "Us College"
//     },
//     house:{
//         ...state.school.house,
//         name:'Nilufer',
//         point:2
//     }
// }

// console.log(state)
// console.log(newState)

// <======================================================>
// let state = {
//          houses: {
//              gryffindor: {
//              points: 15
//          },
//              ravenclaw: {
//                  points: 7
//          },
//             hufflepuff: {
//                 points: 7
//             },
//             slytherin: {
//                 points: 5
//             }
//         }
//     }

    // old version
// let newState ={
//     ...state,
//     houses:{
//         ...state.houses,
//         gryffindor:{
//          ...state.houses.gryffindor,
//          points: state.houses.gryffindor.points + 3
// }
       
//     }
// }

// dinamic key

// let dynamicKey = "gryffindor";
// let newState = {
//         ...state,
//         houses: {
//             ...state.houses,
//             [dynamicKey]: {
//                 ...state.houses[dynamicKey],
//                 points: state.houses[dynamicKey].points + 3
//             }
//         }
//     }


// console.log(state)
// console.log(newState)


// <=================================================================>

// let state = [1, 2, 3]

// let newState = [
//     0,
//     ...state,
//     4,
//     5,
//     66
// ]


// console.log(state)
// console.log(newState)


// <=====================================================================>



// let state = [
//         {
//             id: 1,
//             email: "jaye@hotmail.com"
//         },
//         {
//             id: 2,
//             email: "meryem@yahoo.com"
//         }
//     ]
    
//     let newState = state.map((item, index) => {
    
//         if (item.id === 2) {
//             return {
//                 ...item,
//                 email: 'mery@hotmail.com'
//             }
//         }
    
//         return item;
    
//     })

// console.log(state)
// console.log(newState)

// <==============================================================>

// let state = [1, 2, 3, 4, 5, 6]

// let newItem = 34;

// let newState = [...state];

// newState.splice(3, 0, newItem);

// let newState = [
//     ...state.slice(0, 3),
//     newItem,
//     ...state.slice(3)
// ]

// console.log(state)
// console.log(newState)


// <================================================================>

let state = [1, 2, "X", 4];

let newState = state.filter((item) => {

    if (item == "X") {
        return false
    }
    return true
})

console.log(state);
console.log(newState);
