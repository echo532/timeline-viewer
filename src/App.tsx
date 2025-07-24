// App.tsx
import React, { useState } from 'react';
import { Timeline, type TimelineItemData } from './Timeline';
import { v4 as uuidv4 } from 'uuid';

export const App: React.FC = () => {
  const [items, setItems] = useState<TimelineItemData[]>([]);

  const addItem = () => {
    const side = items.length % 2 === 0 ? 'left' : 'right';
    setItems([
      ...items,
      { id: uuidv4(), content: `New event ${items.length + 1}`, side }
    ]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // You can later enhance this with drag-and-drop reordering or up/down buttons.

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <Timeline items={items} />
    </div>
  );
};
