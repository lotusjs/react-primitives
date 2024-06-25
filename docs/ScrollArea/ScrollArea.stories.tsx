import React, { useState } from 'react';
import { Form, InputNumber, Select } from '@arco-design/web-react';
import { Copy } from './components/Copy';
import { ScrollArea } from './components/ScrollArea';

export default { title: 'Components/ScrollArea' };

export function Basic() {
  const [props, setProps] = useState<React.ComponentPropsWithoutRef<typeof ScrollArea>>({});

  return (
    <>
      <div style={{ margin: '20px auto', width: 'max-content', textAlign: 'center' }}>
        <Form
          layout="inline"
          onChange={(_, values) => {
            setProps(values);
          }}
        >
          <Form.Item label="type" field="type">
            <Select style={{ width: 100 }} options={['always', 'auto', 'scroll', 'hover']} />
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
        type="always"
        style={{ width: 800, height: 800, margin: '30px auto' }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Copy key={index} />
        ))}
      </ScrollArea>
    </>
  );
}
