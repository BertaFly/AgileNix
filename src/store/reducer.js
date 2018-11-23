const initialState = {
    currencyAll: [],
    currencyDisplayed: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_CURRENCY':
            return {
                ...state,
                currencyAll: action.currencyAll
            }
        case 'LOAD_DATA_TO_SHOW':
            let start = action.page === 1 ? 0 : (action.page - 1) * 20;
            let end = start + 20;
            let display = action.toShow.slice(start, end);
            return {
                ...state,
                currencyDisplayed: display
            }
        default:
            return state;            
    }
}

export default reducer;