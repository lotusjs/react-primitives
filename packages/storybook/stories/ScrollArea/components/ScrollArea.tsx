import * as React from 'react';
import * as ScrollAreaPrimitive from '@lotus-design/react-primitives/scroll-area';
import { cn } from '../../utils';
import { ScrollBar } from './ScrollBar';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  viewportRef?: React.ForwardedRef<HTMLDivElement>;
  viewportProps?: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>;
  onScrollPositionChange?: (position: { x: number; y: number }) => void;
}

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>((
  {
    className,
    scrollbars = 'xy',
    viewportRef,
    viewportProps,
    children,
    onScrollPositionChange,
    ...props
  },
  ref,
) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    scrollbars={scrollbars}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      {...viewportProps}
      className={cn('h-full w-full rounded-[inherit]', viewportProps?.className)}
      ref={viewportRef}
      onScroll={(e) => {
        viewportProps?.onScroll?.(e);
        onScrollPositionChange?.({
          x: e.currentTarget.scrollLeft,
          y: e.currentTarget.scrollTop,
        });
      }}
    >
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
