import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ■■Chapter03■■
// import MyHello from './Chapter03/MyHello';
import EventBasic from './Chapter03/EventBasic';
import StateBasic from './Chapter03/StateBasic';
import books from './Chapter03/books';
import ForList from './Chapter03/ForList';
import ForNest from './Chapter03/ForNest';
import ForFilter from './Chapter03/ForFilter';
import ForSort from './Chapter03/ForSort';
import ForItem from './Chapter03/ForItem';
import SelectStyle from './Chapter03/SelectStyle';
import StyledPanel from './Chapter03/StyledPanel';
import TitledPanel from './Chapter03/TitledPanel';
import ListTemplate from './Chapter03/ListTemplate';
import TypeProp, { Member } from './Chapter03/TypeProp';
import StateParent from './Chapter03/StateParent';
import EventMouse from './Chapter03/EventMouse';
import EventCompare from './Chapter03/EventCompare';
import EventError from './Chapter03/EventError';
import EventObj from './Chapter03/EventObj';

// ■■Chapter04■■
import StateForm from './Chapter04/StateForm';
import StateFormUC from './Chapter04/StateFormUC';
import FormTextarea from './Chapter04/FormTextarea';
import FormSelect from './Chapter04/FormSelect';
import FormList from './Chapter04/FormList';
import FormRadio from './Chapter04/FormRadio';
import StateNest from './Chapter04/StateNest';
import StateNestImmer from './Chapter04/StateNestImmer';
import StateNestImmer2 from './Chapter04/StateNestImmer2';
import StateTodo from './Chapter04/StateTodo';
import FormBasic from './Chapter04/FormBasic';
import FormYup from './Chapter04/FormYup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <MyHello myName="鈴木" />
// );

root.render(
  <EventBasic type="time" />
);

root.render(
  <StateBasic init={0} />
);

root.render(
  <ForList src={books}/>
);

root.render(
  <ForFilter src={books} />
);

root.render(
  <ForSort src={books} />
);

root.render(
  <ForItem src={books} />
);

root.render(
  <ForNest src={books} />
);

root.render(
  <SelectStyle mode="light" />
)

root.render(
  <StyledPanel>
    <p>メンバー募集中！</p>
    <p>ようこそ、WINGSプロジェクトへ！！</p>
  </StyledPanel>
)

root.render(<TitledPanel
  title={
    <p>メンバー募集中！</p>
  }
  body={
    <p>ようこそ、WINGSプロジェクトへ！！</p>
  }>
  </TitledPanel>);

root.render(
  <TitledPanel>
    <p key="title">メンバー募集中！</p>
    <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
  </TitledPanel>
);

root.render(
  <ListTemplate src={books}>
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  </ListTemplate>
);

// root.render(
//   <MyHello />
// );

root.render(
  <TypeProp prop1={new Member()} />
);

root.render(
  <TypeProp prop2="男性" />
);

root.render(
  <StateBasic init={0} />
);

root.render(
  <StateParent />
);

root.render(
  <EventMouse
    alt="ロゴ画像"
    beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
    afterSrc="https://www.web-deli.com/image/home_chara.gif" />
);

root.render(
  <EventCompare />
)

root.render(
  <EventError src="./image/wings.jpg"
    alt="サンプル画像" />
);

root.render(
  <EventObj />
);

root.render(
  <StateForm />
);

root.render(
  <StateFormUC />
);

root.render(
  <FormTextarea />
)

root.render(
  <FormSelect />
)

root.render(
  <FormList />
)

root.render(
  <FormRadio />
)

root.render(
  <StateNest />
)

root.render(
  <StateNestImmer />
)

root.render(
  <StateNestImmer2 />
)

root.render(
  <StateTodo />
)

root.render(
  <FormBasic />
)

root.render(
  <FormYup />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
