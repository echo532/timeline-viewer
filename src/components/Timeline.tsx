// src/components/Timeline/Timeline.tsx

import React, { useRef, useState, useLayoutEffect } from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import TimelineItem from './TimelineItem';
import type { TimelineEvent } from '../types';

const initialEvents: TimelineEvent[] = [
  { id: '1', label: 'Kickoff', x: 200, y: 100 },
  { id: '2', label: 'Design Complete', x: 600, y: 220 },
  { id: '3', label: 'Launch 🚀', x: 300, y: 400 },
];

const SNAP_THRESHOLD = 0;

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>(initialEvents);
  const containerRef = useRef<HTMLDivElement>(null);
  const [timelineCenterX, setTimelineCenterX] = useState<number>(0);

  // ⬇️ Get center X position of timeline on first render
  useLayoutEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTimelineCenterX(rect.width / 2);
    }
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { delta, active } = event;

    setEvents((prev) =>
      prev.map((item) => {
        if (item.id !== active.id) return item;

        const newX = item.x + delta.x;
        const newY = item.y + delta.y;

        // ⬇️ Snap if within threshold of timeline center
        const snappedX = Math.abs(newX - timelineCenterX) < SNAP_THRESHOLD
          ? timelineCenterX
          : newX;

        return { ...item, x: snappedX, y: newY };
      })
    );
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        background: '#f9f9f9',
      }}
    >
      {/* Central timeline line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: '#999',
          transform: 'translateX(-50%)',
        }}
      />

      <DndContext onDragEnd={handleDragEnd}>
        {events.map((event) => (
          <TimelineItem key={event.id} {...event} />
        ))}
      </DndContext>
    </div>
  );
};

export default Timeline;
