import React, { useState } from 'react';
import * as ScrollArea from '../src/scroll-area';

export default { title: 'Components/ScrollArea' };

export function Basic() {
  const [props, setProps] = useState({} as any);
  return (
    <>
      <div style={{ margin: '20px auto', width: 'max-content', textAlign: 'center' }}>
        <form
          onChange={(event) => {
            const formData = new FormData(event.currentTarget);
            const entries = (formData as any).entries();
            const cleanup = [...entries].map(([key, value]: any) => [key, value || undefined]);
            const props = Object.fromEntries(cleanup);
            setProps(props);
          }}
        >
          <label>
            type:
            {' '}
            <select name="type">
              <option></option>
              <option>always</option>
              <option>auto</option>
              <option>scroll</option>
              <option>hover</option>
            </select>
          </label>
          {' '}
          <label>
            dir:
            {' '}
            <select name="dir">
              <option></option>
              <option>ltr</option>
              <option>rtl</option>
            </select>
          </label>
          {' '}
          <label>
            scrollHideDelay:
            {' '}
            <input type="number" name="scrollHideDelay" />
          </label>
        </form>
      </div>

      <ScrollAreaStory
        {...props}
        key={props.type}
        style={{ width: 800, height: 800, margin: '30px auto' }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Copy key={index} />
        ))}
      </ScrollAreaStory>
    </>
  );
}

function ScrollAreaStory({
  children,
  animated = false,
  vertical = true,
  horizontal = true,
  ...props
}: any) {
  return (
    <ScrollArea.Root
      {...props}
      className={scrollAreaClass()}
      style={{ width: 200, height: 200, ...props.style }}
    >
      <ScrollArea.Viewport className={scrollAreaViewportClass()}>{children}</ScrollArea.Viewport>
      {vertical && (
        <ScrollArea.Scrollbar className={scrollbarClass()} orientation="vertical">
          <ScrollArea.Thumb className={animated ? animatedThumbClass() : thumbClass()} />
        </ScrollArea.Scrollbar>
      )}
      {horizontal && (
        <ScrollArea.Scrollbar className={scrollbarClass()} orientation="horizontal">
          <ScrollArea.Thumb className={animated ? animatedThumbClass() : thumbClass()} />
        </ScrollArea.Scrollbar>
      )}
      <ScrollArea.Corner className={cornerClass()} />
    </ScrollArea.Root>
  );
}
