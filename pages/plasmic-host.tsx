import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import { Button } from '@mui/material'; // Example: Importing a Material-UI Button

// Register the Material-UI Button component
registerComponent(Button, {
  name: "MuiButton",
  props: {
    variant: {
      type: "choice",
      options: ["text", "outlined", "contained"],
      defaultValue: "text",
    },
    color: {
      type: "choice",
      options: ["default", "inherit", "primary", "secondary", "success", "error", "info", "warning"],
      defaultValue: "primary",
    },
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    onClick: {
      type: "eventHandler",
    },
    children: {
      type: "slot",
      defaultValue: "Click Me",
    },
  },
});

// The PlasmicHost function renders the PlasmicCanvasHost
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}