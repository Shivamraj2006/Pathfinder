// usePathfinding.tsx
// Custom React hook for accessing the PathfindingContext.
import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

/**
 * Returns the pathfinding context value. Throws if used outside a PathfindingProvider.
 */
export const usePathfinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error("usePathfinding must be used within a PathfindingProvider");
  }

  return context;
};
