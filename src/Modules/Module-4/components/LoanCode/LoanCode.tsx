import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './_LoanCode.scss';
import Congratulation from '../Congratulation/Congratulation';
import { useAppDispatch } from '../../utils/hooks/redux';
import { postSignUser } from '../../utils/store/Reducer/prescoringSlice';
import PageNotFound from '../../../Module-3/components/PageNotFound/PageNotFound';


const LoanCode = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  useEffect(() => {
    if (localStorage.getItem('documentCreated')) {
      setIsTrue(true);
    }
  }, []);
  const dispatch = useAppDispatch();

  const [isId, setIsId] = useState(false);
  const { applicationId } = useParams();
  const offers = localStorage.getItem('offers') || null;
  const offersData = offers ? JSON.parse(offers) : null;
  const applicationNum = Number(applicationId);
  const navigate = useNavigate();

  useEffect(() => {
    if (offers !== null) {
      if (offersData[0].applicationId === applicationNum) {
        setIsId(true);
      }
    } else {
      navigate('/loan');
    }
  }, [window.onload]);


  // Функция для проверки кода и вывода сообщения об ошибке
  const handleSubmit = () => {
    const enteredCode = code.join('');
    const validCode = '1234';
    if (enteredCode === validCode) {
      setTimeout(() => {
        setIsTrue(true);
        if (applicationId !== undefined) {
          dispatch(postSignUser(applicationId));
        }
      }, 200);
    } else {
      setError('Invalid confirmation code');
    }
  };

  // Обработчик изменения значения инпута
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (index < 3 && e.target.value !== '') {
      inputRefs[index + 1].current?.focus();
    }

    setError('');
  };
  useEffect(() => {
    if (code.every((value) => value !== '')) {
      handleSubmit();
    }
  }, [code]);

  return (
    !isId ? <PageNotFound /> : (
      <>
        { isTrue ? <Congratulation /> : (

          <div className="loan-code">
            <h2 className="loan-code__title">Please enter confirmation&nbsp;code</h2>
            <form id="confirmation-form">
              <div className="loan-code__inputs">
                { code.map((value, index) => (
                  <input
                    key={ index }
                    ref={ inputRefs[index] } // Привязываем реф к инпуту
                    className="loan-code__input"
                    type="number"
                    value={ value }
                    maxLength={ 1 }
                    onChange={ (e) => handleChange(e, index) }
                    onKeyDown={ (e) => {
                    // Обработка нажатий стрелок
                      if (e.keyCode === 39 && index < 3) {
                        inputRefs[index + 1].current?.focus();
                      } else if (e.keyCode === 37 && index > 0) {
                        inputRefs[index - 1].current?.focus();
                      }
                    } }
                  />
                )) }
              </div>
              { error && <div className="loan-code__error">{ error }</div> }
            </form>
          </div>
        ) }
      </>
    )
  );
};

export default LoanCode;
