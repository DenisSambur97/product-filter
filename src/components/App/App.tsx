import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/reducers';
import ProductList from '../ProductList/ProductList';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortOptions from '../SortOptions/SortOptions';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import styles from './App.module.css';

const store = createStore(rootReducer);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className={styles.root}>
                <h1>Список продуктов</h1>
                <div className={styles.panel}>
                    <FilterPanel />
                    <SortOptions />
                </div>
                <SearchBar />
                <ProductList />
                <Pagination />
            </div>
        </Provider>
    );
};

export default App;
