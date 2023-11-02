import { Product } from '../types/Product';

export const setProducts = (products: Product[]) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const setCategoryFilter = (category: string) => ({
    type: 'SET_CATEGORY_FILTER',
    payload: category,
});

export const setSortOption = (sortOption: string) => ({
    type: 'SET_SORT_OPTION',
    payload: sortOption,
});

export const setSearchTerm = (searchTerm: string) => ({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
});

export const setCurrentPage = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage,
});

export const setTotalPages = (totalPages: number) => ({
    type: 'SET_TOTAL_PAGES',
    payload: totalPages,
});
