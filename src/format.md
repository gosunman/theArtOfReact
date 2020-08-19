# Class Component

```js
import React, { Component } from "react";

export default class Filename extends Component {
  render() {
    return <div></div>;
  }
}
```

---

# Function Component

```js
import React, { useState } from "react";

// state를 사용할 때 주의사항!!
// state를 직접 바꾸어서는 안된다.
// 반드시 사본을 만들어서 업데이트를 해야한다!!

export default function Filename() {
  return <div></div>;
}
```
