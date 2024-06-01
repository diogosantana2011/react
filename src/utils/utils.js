const user = {
    name: 'Diogo Santana',
    imageUrl: 'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp',
    imageSize: 90,
};

const hobbies = [
    {
        id: 0,
        type: 'sport',
        name: 'football',
        practiced: true
    },
    {
        id: 1,
        type: 'virtual',
        name: 'gaming',
        practiced: true
    },
    {
        id: 2,
        type: 'leisure',
        name: 'hiking',
        practiced: true
    },
    {
        id: 3,
        type: 'sport',
        name: 'mountain climing',
        practiced: false
    }
];

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const expectedWinnerOutcomes = {
    // X wins horizontally
    squares1: ['X', 'X', 'X', null, null, null, null, null, null],
    // O wins horizontally
    squares2: ['O', 'O', 'O', null, null, null, null, null, null],
    // X wins vertically
    squares3: ['X', null, null, 'X', null, null, 'X', null, null],
    // O wins vertically
    squares4: ['O', null, null, 'O', null, null, 'O', null, null],
    // X wins diagonally
    squares5: ['X', null, null, null, 'X', null, null, null, 'X'],
    // O wins diagonally
    squares6: ['O', null, null, null, 'O', null, null, null, 'O'],
    // Draw
    squares7: ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O']
};

const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    { category: "Clothing", price: "$29.99", stocked: true, name: "T-Shirt" },
    { category: "Clothing", price: "$49.99", stocked: false, name: "Hoodie" },
    { category: "Clothing", price: "$19.99", stocked: true, name: "Jeans" },
    { category: "Books", price: "$9.99", stocked: true, name: "The Great Gatsby" },
    { category: "Books", price: "$14.99", stocked: false, name: "To Kill a Mockingbird" },
    { category: "Books", price: "$19.99", stocked: true, name: "The Lord of the Rings" },
    { category: "Toys", price: "$19.99", stocked: true, name: "Lego Set" },
    { category: "Toys", price: "$29.99", stocked: false, name: "Barbie Doll" },
    { category: "Toys", price: "$24.99", stocked: true, name: "Hot Wheels Car" }
];

export { user, hobbies, lines, expectedWinnerOutcomes, products};