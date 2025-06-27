// binaryTree.ts
// Implements the Binary Tree maze generation algorithm for the grid.
import { MAX_COLS, MAX_ROWS } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { destroyWall } from "../../../utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../../utils/types";

/**
 * Generates a maze using the Binary Tree algorithm.
 * @param grid The grid to modify.
 * @param startTile The starting tile.
 * @param endTile The ending tile.
 * @param setIsDisabled Function to disable/enable UI during generation.
 * @param speed Animation speed.
 */
export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (disabled: boolean) => void,
  speed: SpeedType
) => {
  createWall(startTile, endTile, speed); // Make initial wall setup
  await sleep(MAX_ROWS * MAX_COLS); // Wait for the wall setup to complete

  // Set walls on even rows and columns
  for (const row of grid) {
    for (const node of row) {
      if (node.row % 2 === 0 || node.col % 2 === 0) {
        if (!isEqual(node, startTile) && !isEqual(node, endTile)) {
          node.isWall = true;
        }
      }
    }
  }

  // Randomly destroy walls to create maze paths
  for (let r = 1; r < MAX_ROWS; r += 2) {
    for (let c = 1; c < MAX_COLS; c += 2) {
      if (r === MAX_ROWS - 2 && c === MAX_COLS - 2) {
        // Skip the bottom-right corner
        continue;
      } else if (r === MAX_ROWS - 2) {
        // If it's the last row, destroy a wall to the right
        await destroyWall(grid, r, c, 1, speed);
      } else if (c === MAX_COLS - 2) {
        // If it's the last column, destroy a wall below
        await destroyWall(grid, r, c, 0, speed);
      } else {
        // Otherwise, randomly destroy a wall to the right or below
        await destroyWall(grid, r, c, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false); // Re-enable the UI
};
