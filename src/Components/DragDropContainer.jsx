// the container widget where draggable children widgets can be placed
function DragDropContainer({
    child,
    onDrop,  // called when the user drops a widget into the container
    onDragEnter, // called when the user hovers a widget over the container without dropping it.
    onDragLeave, // called when the user drags a widget outside without dropping it. called to clear the marking when onDragEnter was called
    isDraggedOver, // creates a marking over the container where the widget will be dropped
}) {
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
            onDrop={onDrop}
            onDragEnter={onDragEnter} /* run when a draggable element enters the container */
            onDragLeave={onDragLeave}
            onDragOver={(e) => e.preventDefault()} /* allow element to be dropped into the "div". by default, the browser does not normally allow that */
        >
            {child} 
        </div>
    );
}

export default DragDropContainer;