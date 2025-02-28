import { useDroppable } from '@dnd-kit/core';
import React from 'react';

const Droppable = ({ children }) => {


    const { setNodeRef } = useDroppable({
        id: 'droppable',
    });

    return (
        <div ref={setNodeRef}>
            {children}
        </div>
    );
};

export default Droppable;