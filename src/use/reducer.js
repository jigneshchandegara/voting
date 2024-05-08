import { DELETE_Party_ERROR, DELETE_Party_PENDING, DELETE_Party_SUCCESS, GET_Party_ERROR, GET_Party_PENDING, GET_Party_SUCCESS, POST_Party_ERROR, POST_Party_PENDING, POST_Party_SUCCESS } from "./action";


let initialstate = {
    party: [],
    isLoading: false,
    isError: null,
}

let userReducer = (state = initialstate, action) => {
    console.log(action, "action from reducer");
    switch (action.type) {

        case POST_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case POST_Party_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.data)
            }
        }
        case POST_Party_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        case GET_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case GET_Party_SUCCESS: {
            return {
                isLoading: false,
                party: action.data
            }
        }
        case GET_Party_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        case DELETE_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case DELETE_Party_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.filter((item) => item.id != action.data.id)
            }
        }
        case DELETE_Party_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default userReducer