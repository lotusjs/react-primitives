import React, { forwardRef } from 'react';
import { Primitive } from '@lotus-design/react-primitives/primitive';
import { cn } from '../../utils';

type AutosizeElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;

export const Autosize = forwardRef<AutosizeElement, PrimitiveDivProps>(
  (props, forwardedRef) => {
    return (
      <Primitive.div
        {...props}
        ref={forwardedRef}
        className={cn('flex', 'overflow-auto', props.className)}
      >
        <Primitive.div
          className={cn('flex', 'flex-col', 'flex-1')}
        >
          {props.children}
        </Primitive.div>
      </Primitive.div>
    );
  },
);
