import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { FilterableProductTable } from '../components';

afterEach(cleanup);

describe('FilterableProductTable', () => {
    test('renders without crashing', () => {
        const { container } = render(<FilterableProductTable products={[]} />);
        expect(container).toMatchSnapshot();
    });

    test('expands table when button is clicked', async () => {
        const products = [
            { name: 'Apple', category: 'Fruits', price: '$1', stocked: true }
        ];
        const { getByText, queryByText } = render(<FilterableProductTable products={products} />);
        expect(queryByText('Name')).toBeNull();
        fireEvent.click(getByText('Show Product Table'));
        expect(getByText('Apple')).toBeInTheDocument();
    });

    test('filters products when search term is entered', () => {
        const products = [
            { name: 'Apple', category: 'Fruits', price: '$1', stocked: true },
            { name: 'Spinach', category: 'Vegetables', price: '$2', stocked: true },
        ];
        const { getByPlaceholderText, getByText, queryByText } = render(<FilterableProductTable products={products} />);
        fireEvent.click(getByText('Show Product Table'));
        fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'apple' } });
        expect(getByText('Apple')).toBeInTheDocument();
        expect(queryByText('Spinach')).not.toBeInTheDocument();
    });

    test('filters out-of-stock products when checkbox is checked', () => {
        const products = [
            { name: 'Apple', category: 'Fruits', price: '$1', stocked: true },
            { name: 'Spinach', category: 'Vegetables', price: '$2', stocked: false },
        ];
        const { getByText, getByRole, queryByText } = render(<FilterableProductTable products={products} />);
        fireEvent.click(getByText('Show Product Table'));
        fireEvent.click(getByRole('checkbox', { name: /Only show products in stock./i }));    
        // Assert that the in-stock product is displayed and the out-of-stock product is not displayed
        expect(getByText('Apple')).toBeInTheDocument();
        expect(queryByText('Spinach')).not.toBeInTheDocument();
    });
});