import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)
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
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
