import React, { forwardRef } from 'react';
import { Primitive } from '../primitive';

type AspectRatioElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface AspectRatioProps extends PrimitiveDivProps {
  ratio?: number;
}

const NAME = 'AspectRatio';

const AspectRatio = forwardRef<AspectRatioElement, AspectRatioProps>(
  (props, forwardedRef) => {
    const { ratio = 1 / 1, style, ...aspectRatioProps } = props;

    return (
      <div
        style={{
          // ensures inner element is contained
          position: 'relative',
          // ensures padding bottom trick maths works
          width: '100%',
          paddingBottom: `${100 / ratio}%`,
        }}
        data-lotus-aspect-ratio-wrapper=""
      >
        <Primitive.div
          {...aspectRatioProps}
          ref={forwardedRef}
          style={{
            ...style,
            // ensures children expand in ratio
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </div>
    );
  },
);

AspectRatio.displayName = NAME;

/* ---------------------------------------------------------------------------------------------- */

const Root = AspectRatio;

export {
  AspectRatio,
  Root,
};
export type { AspectRatioProps };
