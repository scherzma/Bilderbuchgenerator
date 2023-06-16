import React from 'react';

function Preview() {
  return (
    <div>
      <p>this is the preview</p>
      <picture>
        <source srcSet="monkey.png" type="image/png" />
        <img alt="" href="monkey.png" />
      </picture>
    </div>
  );
}
export default Preview;
