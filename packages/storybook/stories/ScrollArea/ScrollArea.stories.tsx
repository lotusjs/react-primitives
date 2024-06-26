import React, { useRef, useState } from 'react';
import { useScroll } from '@rcuse/core';
import { Alert, Form, InputNumber, Select } from '@arco-design/web-react';
import { cn } from '../utils';
import { Copy } from './components/Copy';
import { ScrollArea } from './components/ScrollArea';

export default { title: 'Components/ScrollArea' };

export function Basic() {
  const [props, setProps] = useState<React.ComponentPropsWithoutRef<typeof ScrollArea>>({});

  return (
    <>
      <div className={cn('m-2', 'mx-auto', 'w-max', 'text-center')}>
        <Form
          layout="inline"
          onChange={(_, values) => {
            setProps(values);
          }}
        >
          <Form.Item label="type" field="type">
            <Select style={{ width: 100 }} options={['always', 'auto', 'scroll', 'hover', 'never']} />
          </Form.Item>
          <Form.Item label="dir" field="dir">
            <Select style={{ width: 100 }} options={['ltr', 'rtl']} />
          </Form.Item>
          <Form.Item label="scrollHideDelay" field="scrollHideDelay">
            <InputNumber />
          </Form.Item>
        </Form>
      </div>

      <ScrollArea
        {...props}
        key={props.type}
        className={cn('m-2', 'mx-auto', 'w-[48rem]', 'h-[48rem]')}
        style={{ height: 800 }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Copy key={index} />
        ))}
      </ScrollArea>
    </>
  );
}

/**
 * 禁用水平滚动条
 */
export function DisableHorizontalScrollbars() {
  return (
    <ScrollArea
      scrollbars="y"
      className={cn('m-2', 'mx-auto', 'w-[48rem]', 'h-[48rem]')}
    >
      {Array.from({ length: 30 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Copy key={index} />
      ))}
    </ScrollArea>
  );
}

export function ScrollToPosition() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScroll(ref);

  return (
    <>
      <div className={cn('m-2', 'mx-auto', 'w-[48rem]', 'text-center')}>
        <Alert type="info" className={cn('my-2')} content={JSON.stringify(scrollPosition)} />
        <Alert type="info" content={JSON.stringify(scroll)} />
      </div>

      <ScrollArea
        viewportProps={{
          ref,
          onScroll: (e) => {
            onScrollPositionChange({
              x: e.currentTarget.scrollLeft,
              y: e.currentTarget.scrollTop,
            });
          },
        }}
        className={cn('m-2', 'mx-auto', 'w-[48rem]', 'h-[48rem]')}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Copy key={index} />
        ))}
      </ScrollArea>
    </>
  );
}