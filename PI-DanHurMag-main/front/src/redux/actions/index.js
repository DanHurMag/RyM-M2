import axios from "axios";
import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./types";

//version promesa
// export const addFav = (character) => {
//     const endpoint = "http:localhost:3001/rickandmorty/fav";
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//             })
//         })
//     };
// };

//version async
export const addFav = (character) => {
    const endpoint = "http:localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);
        };
    };
};

//version promesas
// export const removeFav = (id) => {
//     const endpoint = "http:localhost:3001/rickandmorty/fav" + id;
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             })
//         })
//     };
// };

//version async
export const removeFav = (id) => {
    const endpoint = "http:localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
        const { data } = await axios.delete(endpoint);
        return dispatch({
            type: REMOVE_FAV,
            payload: data,
        })
    };
};

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender,
    };
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order,
    };
}


export function reset() {
    return {
        type: RESET
    }
}
