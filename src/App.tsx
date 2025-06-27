// App.tsx
// Main application component. Sets up context providers and renders the navigation and grid UI.
import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Nav } from "./components/Nav";

function App() {
  // Ref to track if a visualization is currently running
  const isVisualizationRunningRef = useRef(false);

  return (
    // Provide pathfinding, tile, and speed context to the app
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col bg-[#131416]">
            {/* Navigation bar and controls */}
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            {/* Main grid for visualization */}
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
