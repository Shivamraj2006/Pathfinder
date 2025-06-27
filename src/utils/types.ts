// types.ts
// Type definitions for algorithms, tiles, grid, and speed in the pathfinding visualizer.

/**
 * Supported pathfinding algorithms.
 */
export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export interface AlgorithmSelectType {
  name: string;
  value: AlgorithmType;
}

/**
 * Supported maze generation algorithms.
 */
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

/**
 * Represents a single tile in the grid.
 */
export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  isStart: boolean;
  parent: TileType | null;
};

/**
 * Represents the grid as a 2D array of tiles.
 */
export type GridType = TileType[][];

/**
 * Supported animation speeds.
 */
export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
