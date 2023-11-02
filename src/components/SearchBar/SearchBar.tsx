import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setCurrentPage } from '../../actions/actions';
import styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: any) => state.searchTerm);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handleSearch = () => {
        dispatch(setCurrentPage(1)); // Сброс текущей страницы при поиске
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.search}
            />
            <button
                onClick={handleSearch}
                className={styles.btn}
            >
                Найти
            </button>
        </div>
    );
};

export default SearchBar;
