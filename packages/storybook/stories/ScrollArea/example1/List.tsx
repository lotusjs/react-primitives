import React, { useEffect } from 'react';
import { useCounter } from '@rcuse/core';
import { ScrollArea } from '../components/ScrollArea';
import { Autosize } from '../components/Autosize';

export function List() {
  const [count, handlers] = useCounter(3, { min: 0, max: 1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      handlers.increment();
    }, 2 * 1000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Autosize className="w-full">
      <ScrollArea type="always">
        {Array.from({ length: count }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>
            信息占位
            {index + 1}
          </p>
        ))}
      </ScrollArea>
    </Autosize>
  );
}
