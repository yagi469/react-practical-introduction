import React from "react";

// 書籍情報はProps(src)経由で受け取る
export default function ForSort({ src }) {
  src.sort((m, n) => m.price - n.price);
  return (
    // 書籍情報（src属性）を<dt>/<dd>リストに整形
    <dl>
      {
      src.map(elem => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
