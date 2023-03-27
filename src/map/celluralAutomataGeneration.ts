let mapSize: number = 100;

let grid: number[][] = new Array(mapSize);
let grid2: number[][] = new Array(mapSize);

let size_x: number = mapSize;
let size_y: number = mapSize;

let r1_cutoff: number = 5;
let r2_cutoff: number = 2;

function giveRandom() {
    return Math.random() > 0.85 ? 1 : 0;
}

function initMap() {
    let xi: number = 0;
    let yi: number = 0;

    for (xi = 0; xi < mapSize; ++xi) {
        grid[xi] = new Array(mapSize);
        grid2[xi] = new Array(mapSize);
    }

    for (yi = 1; yi < size_y - 1; yi++) {
        for (xi = 1; xi < size_x - 1; xi++) {
            grid[yi][xi] = giveRandom();
        }
    }

    // for (yi = 0; yi < size_y; yi++) {
    //     for (xi = 0; xi < size_x; xi++) {
    //         grid2[yi][xi] = 1;
    //     }
    // }

    for (yi = 0; yi < size_y; yi++) {
        grid[yi][0] = grid[yi][size_x - 1] = 1;
    }

    for (xi = 0; xi < size_x; xi++) {
        grid[0][xi] = grid[size_y - 1][xi] = 1;
    }
}

function iterateSimulation() {
    let xi: number;
    let yi: number;
    let ii: number;
    let jj: number;

    for (yi = 1; yi < size_y - 1; yi++) {
        for (xi = 1; xi < size_x - 1; xi++) {
            let adjcount_r1: number = 0;
            let adjcount_r2: number = 0;

            for (ii = -1; ii <= 1; ii++)
                for (jj = -1; jj <= 1; jj++) {
                    if (grid[yi + ii][xi + jj] != 0)
                        adjcount_r1++;
                }
            for (ii = yi - 2; ii <= yi + 2; ii++)
                for (jj = xi - 2; jj <= xi + 2; jj++) {
                    if (Math.abs(ii - yi) == 2 && Math.abs(jj - xi) == 2)
                        continue;
                    if (ii < 0 || jj < 0 || ii >= size_y || jj >= size_x)
                        continue;
                    if (grid[ii][jj] != 0)
                        adjcount_r2++;
                }
            if (adjcount_r1 >= r1_cutoff || adjcount_r2 <= r2_cutoff)
                grid2[yi][xi] = 1;
            else
                grid2[yi][xi] = 0;
        }
    }

    for (yi = 1; yi < size_y - 1; yi++)
        for (xi = 1; xi < size_x - 1; xi++)
            grid[yi][xi] = grid2[yi][xi];
}

export function generateMap(): number[][] {
    initMap();

    for (let i = 0; i < 5; i++) {
        iterateSimulation();
    }

    return grid;
}