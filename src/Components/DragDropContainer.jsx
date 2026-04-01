import { useRef } from "react";
// the container widget where draggable children widgets can be placed
function DragDropContainer({
    child,
    onDrop,  // called when the user drops a widget into the container
    onDragEnter, // called when the user hovers a widget over the container without dropping it.
    onDragLeave, // called when the user drags a widget outside without dropping it. called to clear the marking when onDragEnter was called
    isDraggedOver, // creates a marking over the container where the widget will be dropped
}) {

    const dragDepth = useRef(0);

    // runs when a draggable component hovers over the container
    const handleDragEnter = (e) => {
        // capture events + depth counter used
        e.preventDefault();
        dragDepth.current += 1; // increase the drag depth when hovering a deeper descendant of an element
        console.log(dragDepth.current);
        if(dragDepth.current >= 1)
            onDragEnter(e);
    };

    // runs when a component being dragged leaves the container
    const handleDragLeave = (e) => {
        e.preventDefault();
        dragDepth.current = Math.max(0, dragDepth.current-1);
        if(dragDepth.current === 0)
            onDragLeave(e);
    };

    // when the component is dropped into the container's area
    const handleDrop = (e) => {
        e.preventDefault();
        dragDepth.current = 0;
        onDrop(e);
    };

    // container for drag drop locations where widgets can be placed
    return ( 
        <div 
            style={
                isDraggedOver ? {
                    border: "dashed 2px #999",
                    borderRadius: "20px",
                    minHeight: "5rem",
                    boxSizing: "border-box",
                } 
                : {}
            }
            // tracks the drop target of the dragging component
            onDragOverCapture={(e) => e.preventDefault()}
            onDropCapture={(e) => {
                e.preventDefault();
                handleDrop(e);
            }}
            onDragEnterCapture={handleDragEnter}
            onDragLeaveCapture={handleDragLeave}
        >
            {child} 
        </div>
    );
}

export default DragDropContainer;