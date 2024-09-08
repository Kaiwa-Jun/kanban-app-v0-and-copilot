declare module "react-beautiful-dnd" {
  import * as React from "react";

  export interface DraggableLocation {
    droppableId: string;
    index: number;
  }

  export interface DropResult {
    draggableId: string;
    type: string;
    source: DraggableLocation;
    reason: "DROP" | "CANCEL";
    destination?: DraggableLocation;
  }

  export interface DraggableProps {
    draggableId: string;
    index: number;
  }

  export interface DroppableProps {
    droppableId: string;
    type?: string;
    direction?: "vertical" | "horizontal";
    isDropDisabled?: boolean;
    isCombineEnabled?: boolean;
    ignoreContainerClipping?: boolean;
    renderClone?: DraggableProps;
  }

  export class DragDropContext extends React.Component<{
    onDragEnd: (result: DropResult) => void;
  }> {}

  export class Droppable extends React.Component<DroppableProps> {}

  export class Draggable extends React.Component<DraggableProps> {}
}
