import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  CheckFill,
  CloseRoundFill,
  ExpandDown,
} from '../../../../../common/assets/icon/moduleIcon/index';
import './_CustomizeCard.scss';
import { FormPrescording } from '../../../utils/Interface';
import { useAppDispatch, useAppSelector } from '../../../../Module-4/utils/hooks/redux';
import { postPrescoringStepOne } from '../../../../Module-4/utils/store/Reducer/prescoringSlice';
import { termConst } from '../../../utils/Constants';
import PreloaderToCards from '../../Preloader/PreloaderToCards/PreloaderToCards';


const CustomizeCard = () => {
  const [amount, setAmount] = useState(15000);
  const {
    register,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm<FormPrescording>({ mode: 'onBlur' });
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(((state) => state.prescoringSlice));

  const onSubmit = (data: FormPrescording) => {
    dispatch(postPrescoringStepOne({ ...data }));
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <>
      { isLoading ? (
        <PreloaderToCards />
      ) : (
        <form
          noValidate
          className="customize-card"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="customize-card__container-upper">
            <div className="customize-card__container-upper-1">
              <div className="customize-card__lid">
                <h2 className="customize-card__title">Customize your&nbsp;card</h2>
                <p className="customize-card__steps">Step 1&nbsp;of&nbsp;5</p>
              </div>
              <div className="customize-card__spin">
                <p className="customize-card__spin-description">Select amount</p>
                <p className="customize-card__spin-amount">{ amount }</p>
                <input
                  { ...register('amount') }
                  type="range"
                  className="customize-card__range"
                  min="15000"
                  max="600000"
                  value={ amount }
                  onChange={ handleChangeAmount }
                />
                <div className="customize-card__range-number">
                  <b className="customize-card__range-minmax">15 000</b>
                  <b className="customize-card__range-minmax">600 000</b>
                </div>
              </div>
            </div>
            <div className="customize-card__container-upper-2">
              <h3 className="customize-card__selected-amount">You have chosen the amount</h3>
              <p className="customize-card__sum">{ amount }</p>
            </div>
          </div>
          <div className="customize-card__container-down">
            <h3 className="customize-card__contact-title">Contact Information</h3>
            <div className="customize-card__form">
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="lastName-field" className="customize-card__lable">
                    Your last name <span className="customize-card__lable-span">*</span>
                  </label>
                  <input
                    { ...register('lastName', {
                      required: 'Enter your last name',
                      pattern: {
                        value: /^(?=.{2,40}$)[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/i,
                        message: 'Incorrect last name',
                      },
                    }) }
                    type="text"
                    id="lastName-field"
                    className="customize-card__input"
                    minLength={ 2 }
                    maxLength={ 40 }
                    placeholder="For Example Doe"
                  />
                  { formState.isSubmitted && (
                    errors.lastName ? (
                      <CloseRoundFill className="customize-card__icon" />
                    ) : (
                      <CheckFill className="customize-card__icon" />
                    )
                  ) }
                </div>
                { errors.lastName && (
                  <span className="email-field-error customize-card__span">
                    { errors.lastName.message }
                  </span>
                ) }
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="firstName-field" className="customize-card__lable">Your first name
                    <span
                      className="customize-card__lable-span"
                    >*
                    </span>
                  </label>
                  <input
                    { ...register('firstName', {
                      required: 'Enter your first name',
                      pattern: {
                        value: /^(?=.{2,40}$)[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/i,
                        message: 'Incorrect first name',
                      },
                    }) }
                    type="text"
                    id="firstName-field"
                    className="customize-card__input"
                    minLength={ 2 }
                    maxLength={ 40 }
                    name="firstName"
                    placeholder="For Example Jhon"
                  />
                  { formState.isSubmitted && (
                    errors.firstName ? (
                      <CloseRoundFill className="customize-card__icon" />
                    ) : (
                      <CheckFill className="customize-card__icon" />
                    )
                  ) }
                </div>
                { errors.firstName && (
                  <span className="email-field-error customize-card__span">
                    { errors.firstName.message }
                  </span>
                ) }
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="middleName-field" className="customize-card__lable">Your patronymic <span
                    className="customize-card__lable-span"
                  />
                  </label>
                  <input
                    { ...register('middleName') }
                    type="text"
                    id="middleName-field"
                    className="customize-card__input"
                    minLength={ 2 }
                    maxLength={ 40 }
                    name="middleName"
                    placeholder="For Example Victorovich"
                  />
                </div>
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="term-field" className="customize-card__lable">Select term
                    <span
                      className="customize-card__lable-span"
                    >*
                    </span>
                  </label>
                  <select
                    { ...register('term') }
                    id="term-field"
                    className="customize-card__input customize-card__input_select"
                    name="term"
                  >
                    { termConst.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
                  </select>
                  <ExpandDown className="customize-card__expand" />
                </div>
                <span className="email-field-error customize-card__span" />
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="email-field" className="customize-card__lable">Your email
                    <span
                      className="customize-card__lable-span"
                    >*
                    </span>
                  </label>
                  <input
                    { ...register('email', {
                      required: 'Incorrect email address',
                      pattern: {
                        value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                        message: 'Incorrect email address',
                      },
                    }) }
                    type="email"
                    id="email-field"
                    className="customize-card__input"
                    placeholder="test@gmail.com"
                  />
                  { formState.isSubmitted && (
                    errors.email ? (
                      <CloseRoundFill className="customize-card__icon" />
                    ) : (
                      <CheckFill className="customize-card__icon" />
                    )
                  ) }
                </div>
                { errors.email && (
                  <span className="email-field-error customize-card__span">
                    { errors.email.message }
                  </span>
                ) }
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="birthdate-field" className="customize-card__lable">
                    Your date of birth <span className="customize-card__lable-span">*</span>
                  </label>
                  <input
                    className="customize-card__input customize-card__input_date"
                    type="date"
                    id="birthdate-field"
                    max={ (new Date(new Date().setFullYear(new Date().getFullYear() - 18))).toISOString().slice(0, 10) }
                    placeholder="Select Date and Time"
                    { ...register('birthdate', {
                      required: 'You must be at least 18 years old.',
                    }) }
                  />
                  { /* eslint-disable-next-line no-nested-ternary */ }
                  { formState.isSubmitted ? (errors.birthdate ? (
                    <CloseRoundFill className="customize-card__icon" />
                  ) : (
                    <CheckFill className="customize-card__icon" />
                  )) : '' }
                </div>
                { errors.birthdate && (
                  <span className="email-field-error customize-card__span">
                    { errors.birthdate.message }
                  </span>
                ) }
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="passSeries-field" className="customize-card__lable">Your passport series
                    <span
                      className="customize-card__lable-span"
                    >*
                    </span>
                  </label>
                  <input
                    { ...register('passportSeries', {
                      required: 'The series must be 4 digits',
                      pattern: {
                        value: /^[0-9]{4}$/,
                        message: 'The series must be 4 digits',
                      },
                    }) }
                    type="number"
                    id="passSeries-field"
                    className="customize-card__input"
                    min={ 0 }
                    max={ 9999 }
                    name="passportSeries"
                    placeholder="0000"
                  />
                  { /* eslint-disable-next-line no-nested-ternary */ }
                  { formState.isSubmitted ? (errors.passportSeries ? (
                    <CloseRoundFill className="customize-card__icon" />
                  ) : (
                    <CheckFill className="customize-card__icon" />
                  )) : '' }
                </div>
                { errors.passportSeries && (
                  <span className="email-field-error customize-card__span">
                    { errors.passportSeries.message }
                  </span>
                ) }
              </article>
              <article className="customize-card__inputs">
                <div className="customize-card__input-box">
                  <label htmlFor="middleName-field" className="customize-card__lable">Your passport number
                    <span
                      className="customize-card__lable-span"
                    >*
                    </span>
                  </label>
                  <input
                    { ...register('passportNumber', {
                      required: 'The series must be 6 digits',
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: 'The series must be 6 digits',
                      },
                    }) }
                    required
                    min={ 0 }
                    max={ 999999 }
                    type="number"
                    id="passNumber-field"
                    className="customize-card__input"
                    name="passportNumber"
                    placeholder="000000"
                  />
                  { /* eslint-disable-next-line no-nested-ternary */ }
                  { formState.isSubmitted ? (errors.passportNumber ? (
                    <CloseRoundFill className="customize-card__icon" />
                  ) : (
                    <CheckFill className="customize-card__icon" />
                  )) : '' }
                </div>
                { errors.passportNumber && (
                  <span className="email-field-error customize-card__span">
                    { errors.passportNumber.message }
                  </span>
                ) }
              </article>
            </div>
            <div className="customize-card__button-container">
              <button type="submit" className="customize-card__button">Continue</button>
            </div>
          </div>
        </form>
      ) }
    </>
  );
};

export default CustomizeCard;
