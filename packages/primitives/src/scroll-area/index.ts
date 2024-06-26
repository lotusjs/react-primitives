import { ScrollArea, type ScrollAreaProps } from './components/ScrollArea';
import { ScrollAreaViewport, type ScrollAreaViewportProps } from './components/ScrollAreaViewport';
import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps } from './components/ScrollAreaScrollbar';
import { ScrollAreaThumb, type ScrollAreaThumbProps } from './components/ScrollAreaThumb';
import { ScrollAreaCorner, type ScrollAreaCornerProps } from './components/ScrollAreaCorner';
import { AutoHeight } from './components/AutoHeight';
import { createScrollAreaContext } from './context';

const Root = ScrollArea;
const Viewport = ScrollAreaViewport;
const Scrollbar = ScrollAreaScrollbar;
const Thumb = ScrollAreaThumb;
const Corner = ScrollAreaCorner;

export {
  createScrollAreaContext,
  //
  AutoHeight,
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
  //
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
};

export type {
  ScrollAreaProps,
  ScrollAreaViewportProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaCornerProps,
};
