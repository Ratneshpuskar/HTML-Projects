const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

window.onload = function() {
    const grid = document.getElementById('sudoku-grid');

    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;

            if (puzzle[row][col] !== 0) {
                input.value = puzzle[row][col];
                input.readOnly = true;
                input.classList.add('prefilled');
            }

            td.appendChild(input);
            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }

    document.getElementById('check-solution').onclick = function() {
        checkSolution();
    };
};

function checkSolution() {
    const grid = document.getElementById('sudoku-grid');
    let isCorrect = true;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = grid.rows[row].cells[col].firstChild;
            if (parseInt(input.value) !== solution[row][col]) {
                input.style.backgroundColor = 'red';
                isCorrect = false;
            } else {
                input.style.backgroundColor = 'lightgreen';
            }
        }
    }

    if (isCorrect) {
        alert('Congratulations! You solved the puzzle.');
    } else {
        alert('Some numbers are incorrect. Try again!');
    }
}
