import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../../actions/actions';
import styles from './FilterPanel.module.css';

const categories = ['Категория 1', 'Категория 2', 'Категория 3'];

const FilterPanel: React.FC = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (category: string) => {
        dispatch(setCategoryFilter(category));
    };

    return (
        <div>
            <select className={styles.select} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="">Все категории</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterPanel;
