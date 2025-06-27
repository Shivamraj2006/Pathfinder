# Pathfinding Visualizer

A web application to visualize different pathfinding and maze generation algorithms in action. Built with **React** and **Tailwind CSS**.

## Features

- Visualize popular pathfinding algorithms:
  - Dijkstra's Algorithm
  - A* Search
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
- Generate mazes using:
  - Binary Tree
  - Recursive Division
- Adjustable speed controls for animations
- Interactive grid: add/remove walls by clicking and dragging
- Responsive design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pathfinding-visualizer.git
   cd pathfinding-visualizer
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

## Project Structure

- `src/components/` – UI components (Grid, Tile, Nav, etc.)
- `src/context/` – React context providers for state management
- `src/hooks/` – Custom React hooks
- `src/lib/algorithms/` – Pathfinding and maze generation algorithms
- `src/utils/` – Utility functions and constants

