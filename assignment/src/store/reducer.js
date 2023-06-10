export const formDataReducer = (state = {}, action) => {
    if(action.type === 'ADD_FORM_DATA')
    {
        return {
            ...state,
            ...action.formData
        }
    }

    return state
}