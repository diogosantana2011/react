import React, { useState, useMemo } from "react";

// eslint-disable-next-line
function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name : 
    <span style={{color: 'red'}}>
        {product.name}
    </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products }) {
    // Group products by category
    const groupedProducts = products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
    
    const categoryRows = Object.keys(groupedProducts).map(category => {
        const productsInCategory = groupedProducts[category];
        return (
            <React.Fragment key={category}>
                <tr>
                    <th colSpan="2" className="centered-category">{category}</th>
                </tr>
                {productsInCategory.map((product, index) => (
                    <ProductRow 
                        product={product}
                        key={`${product}-${index}-${product.name}`}
                    />
                ))}
            </React.Fragment>
        );
    });    

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{categoryRows}</tbody>
        </table>
    );
}

function SearchBar({ searchTerm, onSearchChange, showInStockOnly, onShowInStockChange}) {
    return (
        <form className="input-form">
            <input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={onSearchChange}
            />
            <label>
                <input 
                    type="checkbox" 
                    checked={showInStockOnly}
                    onChange={onShowInStockChange}
                />
                { ' ' }
                Only show products in stock.
            </label>
        </form>
    );
}

function FilterableProductTable({ products }) {
    const [isTableExpanded, setIsTableExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showInStockOnly, setShowInStockOnly] = useState(false);

    const toggleTable = () => {
        setIsTableExpanded(!isTableExpanded);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleShowInStockChange = (event) => {
        setShowInStockOnly(event.target.checked);
    };

    // Filter products based on search term and stock availability
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const isMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const isInStock = !showInStockOnly || product.stocked;
            return isMatch && isInStock;
        });
    }, [products, searchTerm, showInStockOnly]);

    return (
        <div>
            <button className="expand-button" onClick={toggleTable}>
                {isTableExpanded ? 'Hide Product Table' : 'Show Product Table'}
            </button>
            {isTableExpanded && 
                <div>
                    <SearchBar 
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        showInStockOnly={showInStockOnly}
                        onShowInStockChange={handleShowInStockChange}
                    />
                    {filteredProducts.length === 0 ? (
                        <p>No results found.</p>
                    ) : (
                        <ProductTable products={filteredProducts} />
                    )}
                </div>
            }
        </div>
    );
}

export default FilterableProductTable;