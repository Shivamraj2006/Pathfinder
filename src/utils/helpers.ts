// helpers.ts
// Utility functions for grid and tile operations in the pathfinding visualizer.
import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

/**
 * Creates a row of tiles for the grid.
 */
const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = [];
  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isStart: row === startTile.row && col === startTile.col,
      isTraversed: false,
      parent: null,
    });
  }
  return currentRow;
};

/**
 * Creates the initial grid with start and end tiles.
 */
export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
};

/**
 * Checks if the given coordinates are for the start or end tile.
 */
export const checkIfStartOrEnd = (row: number, col: number) => {
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  );
};

/**
 * Toggles a wall at the given grid position and returns a new grid.
 */
export const createNewGrid = (grid: GridType, row: number, col: number) => {
  const newGrid = grid.slice();
  const newTile = {
    ...newGrid[row][col],
    isWall: !newGrid[row][col].isWall,
  };

  newGrid[row][col] = newTile;
  return newGrid;
};

/**
 * Checks if two tiles are equal by row and column.
 */
export const isEqual = (a: TileType, b: TileType) => {
  return a.row === b.row && a.col === b.col;
};

/**
 * Checks if the given row and column match the tile's position.
 */
export const isRowColEqual = (row: number, col: number, tile: TileType) => {
  return row === tile.row && col === tile.col;
};

/**
 * Returns a promise that resolves after the given number of milliseconds.
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Returns a random integer between the given min and max values.
 */
export const getRandInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Checks if the given tile is present in the stack.
 */
export const checkStack = (tile: TileType, stack: TileType[]) => {
  for (let i = 0; i < stack.length; i++) {
    if (isEqual(stack[i], tile)) return true;
  }
  return false;
};

/**
 * Removes the given tile from the queue if present.
 */
export const dropFromQueue = (tile: TileType, queue: TileType[]) => {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) {
      queue.splice(i, 1);
      break;
    }
  }
};
