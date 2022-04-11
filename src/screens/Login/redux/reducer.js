const initialState = {
    tokenData: '',
}
export default function LoginReducer (state = initialState, action ) {
    switch (action.type) {
        case 'SET_TOKEN':
            return{
                ...state,
                tokenData: action.token,
            }
        default:
            return{
                ...state
            }
    }
}