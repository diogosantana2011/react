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

export { user, hobbies, lines, expectedWinnerOutcomes };