import React, { useRef, useState } from 'react';
import { useCounter, useScroll } from '@rcuse/core';
import { Alert, Button, Form, InputNumber, Select, Space } from '@arco-design/web-react';
import { cn } from '../utils';
import { Copy } from './components/Copy';
import { ScrollArea } from './components/ScrollArea';
import { Autosize } from './components/Autosize';

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

export function SubscribeScrollChanges() {
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
        viewportRef={ref}
        onScrollPositionChange={onScrollPositionChange}
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

export function ScrollToPosition() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className={cn('m-2', 'mx-auto', 'text-center')}>
        <Space>
          <Button onClick={scrollToBottom}>Scroll to bottom</Button>
          <Button onClick={scrollToCenter}>Scroll to center</Button>
          <Button onClick={scrollToTop}>Scroll to top</Button>
        </Space>
      </div>

      <ScrollArea className={cn('m-2', 'mx-auto', 'w-[36rem]', 'h-[36rem]')} viewportRef={viewport}>
        {Array.from({ length: 30 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Copy key={index} />
        ))}
      </ScrollArea>
    </>
  );
}

export function AutoSize() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });

  return (
    <>
      <div className={cn('m-2', 'mx-auto', 'text-center')}>
        <Space>
          <Button onClick={() => { handlers.decrement(); }}>Remove paragraph</Button>
          <Button onClick={() => { handlers.increment(); }}>Add paragraph</Button>
        </Space>
      </div>
      <Autosize>
        <ScrollArea
          type="always"
          className={cn('m-2', 'mx-auto', 'w-96', 'max-h-96')}
          scrollbars="y"
        >
          {Array.from({ length: count }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Copy key={index} />
          ))}
        </ScrollArea>
      </Autosize>
    </>
  );
}
