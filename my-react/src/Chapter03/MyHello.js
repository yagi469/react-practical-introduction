// PropTypesをインポート
import PropTypes from 'prop-types';

// export default function MyHello({ myName = '権兵衛' }) {
//   return (
//     <div>こんにちは、{myName}さん！</div>
//   )
// }

function MyHello(props) {
  return (
    <div>こんにちは、{props.myName}さん！</div>
  );
}

// 型情報を宣言
MyHello.propTypes = {
  myNmae: PropTypes.string.isRequired
};

export default MyHello;
