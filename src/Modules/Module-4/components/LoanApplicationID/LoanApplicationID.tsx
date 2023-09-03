import React from 'react';

import './LoanApplicationId.scss';
import { CheckFill, CloseRoundFill, ExpandDown } from '../../../../common/assets/icon/moduleIcon';

import { useForm } from 'react-hook-form';

import { ScoringForm } from '../../../Module-3/utils/Interface';
import { genderConst, materialConst, dependentConst, employmentConst } from '../../../Module-3/utils/Constants';


const LoanApplicationId = () => {
  const {
    register,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm<ScoringForm>({ mode: 'onBlur' });

  return (
    <form className="applicationID">
      <div className="applicationID__lid">
        <h2 className="applicationID__title">Continuation of the application</h2>
        <p className="applicationID__steps">Step 2&nbsp;of&nbsp;5</p>
      </div>
      <div className="applicationID__personal-information">
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="gender-field" className="applicationID__lable">What's your gender
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <select
              { ...register('gender', {
                required: 'Select one of the options',
              }) }
              id="gender-field"
              className="applicationID__input applicationID__input_select"
            >
              { genderConst.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
            </select>
            { errors.gender && (
              <span className="applicationID__span">
                { errors.gender.message }
              </span>
            ) }
            <ExpandDown className="applicationID__expand" />
          </div>
          <span className="applicationID__span" />
        </article>
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="maritalStatus-field" className="applicationID__lable">Your marital status
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <select
              { ...register('maritalStatus', {
                required: 'Select one of the options',
              }) }
              id="maritalStatus-field"
              className="applicationID__input applicationID__input_select"
            >
              { materialConst.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
            </select>
            { errors.maritalStatus && (
              <span className="applicationID__span">
                { errors.maritalStatus.message }
              </span>
            ) }
            <ExpandDown className="applicationID__expand" />
          </div>
          <span className="applicationID__span" />
        </article>
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="dependentAmount-field" className="applicationID__lable">Your number of dependents
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <select
              { ...register('dependentAmount', {
                required: 'Select one of the options',
              }) }
              id="dependentAmount-field"
              className="applicationID__input applicationID__input_select"
            >
              { dependentConst.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
            </select>
            { errors.dependentAmount && (
              <span className="applicationID__span">
                { errors.dependentAmount.message }
              </span>
            ) }
            <ExpandDown className="applicationID__expand" />
          </div>
          <span className="applicationID__span" />
        </article>
      </div>
      <div className="applicationID__personal-information">
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="passportIssueDate-field" className="applicationID__lable">
              Date of issue of the passport <span className="applicationID__lable-span">*</span>
            </label>
            <input
              className="applicationID__input applicationID__input_date"
              type="date"
              id="passportIssueDate-field"
              max={ (new Date().toISOString().slice(0, 10)) }
              placeholder="Select Date and Time"
              { ...register('passportIssueDate', {
                required: 'Incorrect date of passport issue date',
              }) }
            />
            { /* eslint-disable-next-line no-nested-ternary */ }
            { formState.isSubmitted ? (errors.passportIssueDate ? (
              <CloseRoundFill className="applicationID__icon" />
            ) : (
              <CheckFill className="applicationID__icon" />
            )) : '' }
          </div>
          { errors.passportIssueDate && (
            <span className="email-field-error applicationID__span">
              { errors.passportIssueDate.message }
            </span>
          ) }
        </article>
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="passportIssueBranch-field" className="applicationID__lable">Your passport series
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <input
              { ...register('passportIssueBranch', {
                required: 'The series must be 6 digits',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'The series must be 6 digits',
                },
              }) }
              type="number"
              id="passportIssueBranch-field"
              className="applicationID__input"
              min={ 0 }
              max={ 999999 }
              placeholder="000000"
            />
            { /* eslint-disable-next-line no-nested-ternary */ }
            { formState.isSubmitted ? (errors.passportIssueBranch ? (
              <CloseRoundFill className="applicationID__icon" />
            ) : (
              <CheckFill className="applicationID__icon" />
            )) : '' }
          </div>
          { errors.passportIssueBranch && (
            <span className="email-field-error applicationID__span">
              { errors.passportIssueBranch.message }
            </span>
          ) }
        </article>
      </div>
      <p className="applicationID__text">Employment</p>
      <div className="applicationID__personal-information">
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="employmentStatus-field" className="applicationID__lable">Your employment status
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <select
              { ...register('employmentStatus', {
                required: 'Select one of the options',
              }) }
              id="employmentStatus-field"
              className="applicationID__input applicationID__input_select"
            >
              { employmentConst.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
            </select>
            { errors.employmentStatus && (
              <span className="applicationID__span">
                { errors.employmentStatus.message }
              </span>
            ) }
            <ExpandDown className="applicationID__expand" />
          </div>
          <span className="applicationID__span" />
        </article>
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="employerINN-field" className="applicationID__lable">Your employer INN
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <input
              { ...register('employerINN', {
                required: 'Department code must be 12 digits',
                pattern: {
                  value: /^[0-9]{12}$/,
                  message: 'Department code must be 12 digits',
                },
              }) }
              type="number"
              id="employerINN-field"
              className="applicationID__input"
              min={ 0 }
              max={ 999999999999 }
              placeholder="000000000000"
            />
            { /* eslint-disable-next-line no-nested-ternary */ }
            { formState.isSubmitted ? (errors.employerINN ? (
              <CloseRoundFill className="applicationID__icon" />
            ) : (
              <CheckFill className="applicationID__icon" />
            )) : '' }
          </div>
          { errors.employerINN && (
            <span className="email-field-error applicationID__span">
              { errors.employerINN.message }
            </span>
          ) }
        </article>
        <article className="applicationID__inputs">
          <div className="applicationID__input-box">
            <label htmlFor="salary-field" className="applicationID__lable">Your salary
              <span
                className="applicationID__lable-span"
              >*
              </span>
            </label>
            <input
              { ...register('salary', {
                required: 'Enter your salary',
                pattern: {
                  value: /^[0-9]{0,10}$/,
                  message: 'Enter your salary',
                },
              }) }
              type="number"
              id="salary-field"
              className="applicationID__input"
              min={ 0 }
              max={ 9999999999 }
              placeholder="For example 100 000"
            />
            { /* eslint-disable-next-line no-nested-ternary */ }
            { formState.isSubmitted ? (errors.salary ? (
              <CloseRoundFill className="applicationID__icon" />
            ) : (
              <CheckFill className="applicationID__icon" />
            )) : '' }
          </div>
          { errors.salary && (
            <span className="email-field-error applicationID__span">
              { errors.salary.message }
            </span>
          ) }
        </article>
      </div>
    </form>
  );
};

export default LoanApplicationId;
