import React from 'react';

interface CopyProps {
  style?: React.CSSProperties;
}

export function Copy(props: CopyProps) {
  const { style } = props;

  return (
    <p style={{ width: 4000, marginTop: 0, ...style }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet eros iaculis, bibendum
      tellus ac, lobortis odio. Aliquam bibendum elit est, in iaculis est commodo id. Donec pulvinar
      est libero. Proin consectetur pellentesque molestie. Fusce mi ante, ullamcorper eu ante finibus,
      finibus pellentesque turpis. Mauris convallis, leo in vulputate varius, sapien lectus suscipit
      eros, ac semper odio sapien sit amet magna. Sed mattis turpis et lacinia ultrices. Nulla a
      commodo mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Pellentesque id tempor metus. Pellentesque faucibus tortor non nisi maximus
      dignissim. Etiam leo nisi, molestie a porttitor at, euismod a libero. Nullam placerat tristique
      enim nec pulvinar. Sed eleifend dictum nulla a aliquam. Sed tempus ipsum eget urna posuere
      aliquam. Nulla maximus tortor dui, sed laoreet odio aliquet ac. Vestibulum dolor orci, lacinia
      finibus vehicula eget, posuere ac lectus. Quisque non felis at ipsum scelerisque condimentum. In
      pharetra semper arcu, ut hendrerit sem auctor vel. Aliquam non lacinia elit, a facilisis ante.
      Praesent eget eros augue. Praesent nunc orci, ullamcorper non pulvinar eu, elementum id nibh.
      Nam id lorem euismod, sodales augue quis, porttitor magna. Vivamus ut nisl velit. Nam ultrices
      maximus felis, quis ullamcorper quam luctus et.
    </p>
  );
}
