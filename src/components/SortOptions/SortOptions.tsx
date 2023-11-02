import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOption } from '../../actions/actions';
import styles from './SortOptions.module.css'

const SortOptions: React.FC = () => {
    const dispatch = useDispatch();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = e.target.value;
        dispatch(setSortOption(selectedSortOption));
    };

    return (
        <div>
            <label>Сортировать по: </label>
            <select className={styles.select} onChange={handleSortChange}>
                <option value="name">Названию</option>
                <option value="price">Цене</option>
            </select>
        </div>
    );
};

export default SortOptions;
