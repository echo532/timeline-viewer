// src/components/Timeline/TimelineItem.tsx

import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface TimelineItemProps {
  id: string;
  label: string;
  x: number;
  y: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, label, x, y }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id,
  });

  // ⬇️ Calculate visual transform based on drag
  const style: React.CSSProperties = {
    position: 'absolute',
    top: y,
    left: x,
    transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) translate(-50%, -50%)`,
    backgroundColor: isDragging ? '#fdd835' : '#2196f3',
    color: 'white',
    padding: '12px 18px',
    borderRadius: 6,
    cursor: 'grab',
    userSelect: 'none',
    transition: isDragging ? 'none' : 'transform 0.15s',
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {label}
    </div>
  );
};

export default TimelineItem;
