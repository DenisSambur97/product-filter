import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../actions/actions';
import styles from './Pagination.module.css'

const Pagination: React.FC = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => state.currentPage);
    const selectedCategory = useSelector((state: any) => state.categoryFilter);

    const handlePageChange = (newPage: number) => {
        dispatch(setCurrentPage(newPage));
    };

    const pageButtons = [];
    const itemsPerPage = 5; // Можно выбрать, сколько товаров отображать на странице

    // Расчёт количество товаров в выбранной категории
    const products = useSelector((state: any) => state.products);
    const productCount = products.filter((product: { category: any; }) => !selectedCategory || product.category === selectedCategory).length;

    // Расчёт количество страниц на основе количества товаров
    const pagesToShow = Math.ceil(productCount / itemsPerPage);

    for (let i = 1; i <= pagesToShow; i++) {
        pageButtons.push(
            <button
                key={i} onClick={() => handlePageChange(i)}
                disabled={i === currentPage}
                className={styles.button}
            >
                {i}
            </button>
        );
    }

    return (
        <div>
            {pageButtons}
        </div>
    );
};

export default Pagination;
