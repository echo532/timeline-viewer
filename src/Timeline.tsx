// Timeline.tsx
import React from 'react';
import './Timeline.css';

export interface TimelineItemData {
  id: string;
  content: string;
  side: 'left' | 'right';
}

interface Props {
  items: TimelineItemData[];
}

export const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-bar" />
      <ul className="timeline-items">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`timeline-item ${item.side}`}
          >
            <div className="content">{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
