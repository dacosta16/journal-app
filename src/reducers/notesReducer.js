

/* 
    {
        notes: [],
        active: null,
        active: {
            id: 'gadfggaf23114235adas'
            title: '',
            body: '',
            imageUrl: '',
            date: 120221
        }
    }
*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {

        default:
            return state;
    }

}