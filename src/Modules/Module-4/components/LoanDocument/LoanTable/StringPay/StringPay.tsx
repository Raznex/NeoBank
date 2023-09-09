import React from 'react';

import './_StringPay.scss';
import { Payment } from '../../../../../Module-3/utils/Interface';


interface IString {
  data: Payment;
}

const StringPay: React.FC<IString> = ({ data }) => (
  <tr className="string-pay">
    { Object.values(data).map((item, id) => <td key={ id } className="string-pay__text">{ item }</td>) }
  </tr>
);

export default StringPay;
