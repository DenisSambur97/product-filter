import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../types/Product';
import { setProducts, setTotalPages } from '../../actions/actions';
import sampleProducts from '../../data/sampleProducts';
import styles from './ProductList.module.css';
// import axios from "axios";

const ProductList: React.FC = () => {
    const products = useSelector((state: any) => state.products);
    const categoryFilter = useSelector((state: any) => state.categoryFilter);
    const sortOption = useSelector((state: any) => state.sortOption);
    const searchTerm = useSelector((state: any) => state.searchTerm);
    const currentPage = useSelector((state: any) => state.currentPage);
    const itemsPerPage = 5; // Можно выбрать по сколько товаров будет отображаться в пагинации

    const dispatch = useDispatch();

    useEffect(() => {
        // Вот так бы выглядел реальный запрос на API (Сергей сказал что можно имитировать данные из файла, но я решил показать что могу и так, ибо в ТЗ про это указанно)
        // axios.get('../api/products').then((response) => {
        //     dispatch(setProducts(response.data));
        //     dispatch(setTotalPages(Math.ceil(response.data.length / itemsPerPage)));
        // });
        // Подгружаем имитированные данные о продукте
        dispatch(setProducts(sampleProducts));
        dispatch(setTotalPages(Math.ceil(sampleProducts.length / itemsPerPage)));
    }, [dispatch]);

    const sortedProducts = [...products];
    if (sortOption === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    const filteredProducts = sortedProducts.filter((product: Product) =>
        !categoryFilter ? true : product.category === categoryFilter
    );

    const searchedProducts = filteredProducts.filter((product: Product) =>
        !searchTerm ? true : product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedProducts = searchedProducts.slice(startIndex, endIndex);

    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Категория</th>
                </tr>
                </thead>
                <tbody>
                {pagedProducts.map((product: Product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
