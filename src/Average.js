import React, { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("calculating now");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export default function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number, 10));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>Average</h1>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>Enroll</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// const getAverage = (numbers) => {
//   console.log("calculating now");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// export default function Average() {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");
//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };
//   const onInsert = (e) => {
//     const nextList = list.concat(parseInt(number, 10));
//     setList(nextList);
//     setNumber("");
//   };
//   return (
//     <div>
//       <h1>Average</h1>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>Enroll</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {getAverage(list)}
//       </div>
//     </div>
//   );
// }
