import React, { useEffect, useRef, useState } from 'react';

import './_LoanCode.scss';
import Congratulation from '../Congratulation/Congratulation';


const LoanCode = () => {
  const [code, setCode] = useState(['', '', '', '']); // Инициализируем состояние для кода
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]; // Создаем рефы для инпутов
  const [error, setError] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  // Функция для проверки кода и вывода сообщения об ошибке
  const handleSubmit = () => {
    const enteredCode = code.join('');
    const validCode = '1234'; // Ожидаемый код

    if (enteredCode === validCode) {
      // Код верный
      setTimeout(() => {
        setIsTrue(true);
      }, 200);

      // Здесь можно добавить логику отправки формы
    } else {
      // Код неверный
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

    // Переключаем фокус на следующий инпут, если есть следующий инпут
    if (index < 3 && e.target.value !== '') {
      inputRefs[index + 1].current?.focus();
    }

    setError('');
  };
  useEffect(() => {
    // Вызываем handleSubmit после обновления состояния code
    if (code.every((value) => value !== '')) {
      handleSubmit();
    }
  }, [code]);

  return (
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
  );
};

export default LoanCode;
