import { useEffect, useState } from 'react';

import { tableSort } from '../../../../Module-3/utils/Constants';
import { Vector10 } from '../../../../../common/assets/icon/moduleIcon';
import './_LoanTable.scss';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux';
import StringPay from './StringPay/StringPay';
import { getStatusOffer, monthlyPaymentsIncSort } from '../../../utils/store/Reducer/prescoringSlice';


const LoanTableSort = () => {
  const [sortDirections, setSortDirections] = useState(
    Array(5).fill(true), // Создаем массив из пяти элементов, все начинаются с true
  );
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const toggleSortDirection = (index: number) => {
    // Создаем копию массива состояний и инвертируем значение для конкретной кнопки
    const newSortDirections = [...sortDirections];
    newSortDirections[index] = !newSortDirections[index];
    setSortDirections(newSortDirections);
    setActiveButton(index);
  };
  const offers = localStorage.getItem('offers') || null;
  const offersData = offers ? JSON.parse(offers) : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getStatusOffer(String(offersData[0].applicationId)));
  }, [window.onload]);

  const { monthlyPayments } = useAppSelector(((state) => state.prescoringSlice));


  return (
    <table className="loan-table">
      <thead>
        <tr className="loan-table__header">
          { tableSort.map((item, index) => (
            <th key={ item.name } className="loan-table__title">
              { item.name }
              <button
                type="button"
                onClick={ () => {
                  dispatch(monthlyPaymentsIncSort(item.sort));
                  toggleSortDirection(index);
                } }
              >
                <Vector10 className={ index === activeButton ? 'loan-table__button' : 'loan-table__button loan-table__button_down' } />
              </button>
            </th>
          )) }
        </tr>
      </thead>
      <tbody className="loan-table__tbody">
        { monthlyPayments.map((item, id) => <StringPay key={ id } data={ item } />) }
      </tbody>
    </table>
  );
};

export default LoanTableSort;
