import { Product } from '../types/Product';

const initialState = {
    products: [] as Product[],
    categoryFilter: '',
    sortOption: 'name',
    searchTerm: '',
    currentPage: 1,
    totalPages: 1,
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'SET_CATEGORY_FILTER':
            return { ...state, categoryFilter: action.payload };
        case 'SET_SORT_OPTION':
            return { ...state, sortOption: action.payload };
        case 'SET_SEARCH_TERM':
            return { ...state, searchTerm: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_TOTAL_PAGES':
            return { ...state, totalPages: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
