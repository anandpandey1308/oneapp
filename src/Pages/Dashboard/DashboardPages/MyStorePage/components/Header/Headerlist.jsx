// MyStorePage/components/Header/HeaderList.jsx
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import HeaderItem from './HeaderItem';
import { useStore } from '../../context/StoreContext';

const HeaderList = () => {
  const { state, dispatch } = useStore();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(state.headers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({ type: 'REORDER_HEADERS', payload: items });
  };

  // Ensure we have headers before rendering
  if (!state.headers) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="headers">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-2 p-4 rounded-lg transition-colors ${
              snapshot.isDraggingOver ? 'bg-gray-50' : ''
            }`}
          >
            {state.headers.map((header, index) => (
              <Draggable 
                key={header.id} 
                draggableId={String(header.id)} // Ensure ID is a string
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`transition-shadow ${
                      snapshot.isDragging ? 'shadow-lg' : 'shadow-sm'
                    }`}
                  >
                    <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div
                        {...provided.dragHandleProps}
                        className="px-3 py-4 cursor-move hover:bg-gray-50"
                      >
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M4 8h16M4 16h16" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <HeaderItem
                          header={header}
                          onUpdate={(updatedHeader) => 
                            dispatch({ type: 'UPDATE_HEADER', payload: updatedHeader })
                          }
                          onDelete={(id) => 
                            dispatch({ type: 'DELETE_HEADER', payload: id })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default HeaderList;