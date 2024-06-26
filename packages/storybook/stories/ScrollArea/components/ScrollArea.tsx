import * as React from 'react';
import * as ScrollAreaPrimitive from '@primitives/scroll-area';
import { cn } from '../../utils';
import { ScrollBar } from './ScrollBar';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  viewportProps?: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>;
}

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, scrollbars = 'xy', viewportProps, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    scrollbars={scrollbars}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport {...viewportProps} className={cn('h-full w-full rounded-[inherit]', viewportProps?.className)}>
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
