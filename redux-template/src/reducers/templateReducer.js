import {TESTCASE1,TESTCASE_ADD, TESTCASE_DELETE} from '../actions/actionTypes'
let templateReducer = (state,action) => {
    // initialize state

    if(state === undefined){
        state ={
            count: 0,
            someArray:[
                {
                    id:1,
                    name: 'Meryem',
                    age:21
                },
                {
                    id:2,
                    name: 'Aydin',
                    age:22
                }
            ]  // array of objects
        }
    }
    switch(action.type){

        case TESTCASE1:
            return {
                ...state,
                count:state.count + action.count
            }
        case TESTCASE_ADD:
            // adding to array
            return {
                ...state,
                someArray:state.someArray.concat(action.data)
            }
        case TESTCASE_DELETE:
            console.log('reducer delete')
            // DELETING to array
            let filteredArray = state.someArray.filter(item=>{
                return item.id != action.id
            })
            console.log('filtered array',filteredArray)
            return {
                ...state,
                someArray:filteredArray
            }

            default:
                return state
    }
}



export default templateReducer