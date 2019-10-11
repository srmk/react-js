export const DYNAMIC_DATA = 'dynamicData';


// export function updateData(value, dispatch) {
//     dispatch({
//         type: DYNAMIC_DATA,
//         payload: value
//     })
// }

export const updateData = (value) => (dispatch) => {
    return dispatch({
        type: DYNAMIC_DATA,
        payload: value
    });
};