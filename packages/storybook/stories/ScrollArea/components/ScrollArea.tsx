import * as React from 'react';
import * as ScrollAreaPrimitive from '@primitives/scroll-area';
import { cn } from '../../utils';
import { ScrollBar } from './ScrollBar';

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, scrollbars = 'xy', children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    scrollbars={scrollbars}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>

    {(scrollbars === 'xy' || scrollbars === 'x') && (
      <ScrollBar orientation="horizontal" />
    )}

    {(scrollbars === 'xy' || scrollbars === 'y') && (
      <ScrollBar orientation="vertical" />
    )}

    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
