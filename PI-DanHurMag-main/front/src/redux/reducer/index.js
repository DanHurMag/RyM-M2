import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "../actions/types"

const initialState = {
    allFavorites: [],
    favorites: []
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allFavorites: [...state.allFavorites, payload],
            };

        case REMOVE_FAV:
            const filterRemove = state.allFavorites.filter((fav) => fav.id !== payload)
            return {
                ...state,
                allFavorites: filtered
            };

        case FILTER:
            const filterByGender = state.allFavorites.filter((fav) => fav.gender === payload);
            return {
                ...state,
                favorites: filterByGender,
            };

        case ORDER:
            const ordered = state.allFavorites.toSorted((a, b) =>
                payload === "Asc" ? a.id - b.id : b.id - a.id
            );
            return {
                ...state,
                favorites: ordered
            };

        case RESET:
            return {
                ...state,
                favorites: allFavorites,
            }

        default:
            return {
                ...state,
            };
    };
};