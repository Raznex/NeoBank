import './_CustomizeCard.scss'
import {
  CheckFill,
  CloseRoundFill,
  ExpandDown
} from "../../../../../common/assets/icon/moduleIcon/index";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormValidation from '../../../utils/useForm';
import {differenceInYears} from 'date-fns';

const CustomizeCard = () => {
  const [startDate, setStartDate] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {handleSubmit, formSubmit, register, errors, formState} = FormValidation();


  const handleDateChange = (date: any) => {
    if (date instanceof Date) {
      const isValidAge = validateAge(date);
    }
    setStartDate(date);
    setIsInputFocused(false)
  };

  const validateAge = (selectedDate: any) => {
    const currentDate = new Date();
    const age = differenceInYears(currentDate, selectedDate);

    return age >= 18;
  };

  return (
    <form className="customize-card"
          onSubmit={handleSubmit(formSubmit)}
          noValidate={true}
    >
      <div className="customize-card__container-upper">
        <div className="customize-card__container-upper-1">
          <div className="customize-card__lid">
            <h2 className="customize-card__title">Customize your&nbsp;card</h2>
            <p className="customize-card__steps">Step 1&nbsp;of&nbsp;5</p>
          </div>
          <div className="customize-card__spin">
            <p className="customize-card__spin-description">Select amount</p>
            <p className="customize-card__spin-amount">150 000</p>
            <input type="range"
                   className="customize-card__range"
                   min="15000"
                   max="600000"/>
            <div className="customize-card__range-number">
            <b className="customize-card__range-minmax">15 000</b>
            <b className="customize-card__range-minmax">600 000</b>
            </div>
          </div>
        </div>
        <div className="customize-card__container-upper-2">
          <h3 className="customize-card__selected-amount">You have chosen the amount</h3>
          <p className="customize-card__sum">150 000 ₽</p>
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
                {...register("lastName", {
                  required: "Enter your last name",
                })}
                type="text"
                id="lastName-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                placeholder="For Example Doe"
              />
              {formState.isSubmitted ? (errors.lastName ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            {errors.lastName && (
              <span className="email-field-error customize-card__span">
                {errors.lastName.message}
              </span>
            )}
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="firstName-field" className="customize-card__lable">Your first name <span
                className="customize-card__lable-span">*</span></label>
              <input
                {...register("firstName", {
                  required: "Enter your first name",
                })}
                type="text"
                id="firstName-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                name="firstName"
                placeholder="For Example Jhon"
              />
              {formState.isSubmitted ? (errors.firstName ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            {errors.firstName && (
              <span className="email-field-error customize-card__span">
                {errors.firstName.message}
              </span>
            )}
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your patronymic <span
                className="customize-card__lable-span"></span></label>
              <input
                type="text"
                id="middleName-field"
                className="customize-card__input"
                maxLength={40}
                name="middleName"
                placeholder="For Example Victorovich"
              />
            </div>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="term-field" className="customize-card__lable">Select term <span
                className="customize-card__lable-span">*</span></label>
              <select
                id="term-field"
                className="customize-card__input customize-card__input_select"
                name="term"
              >
                <option className="customize-card__options">6 month</option>
                <option className="customize-card__options">12 month</option>
                <option className="customize-card__options">18 month</option>
                <option className="customize-card__options">24 month</option>
              </select>
              <ExpandDown className="customize-card__expand"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your email <span
                className="customize-card__lable-span">*</span></label>
              <input
                {...register("email", {
                  required: "Incorrect email address",
                  pattern: {
                    value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Incorrect email address"
                  }
                })}
                type="email"
                id="email-field"
                className="customize-card__input"
                placeholder="test@gmail.com"
              />
              {formState.isSubmitted ? (errors.email ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            {errors.email && (
              <span className="email-field-error customize-card__span">
                {errors.email.message}
              </span>
            )}
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">
                Your date of birth <span className="customize-card__lable-span">*</span>
              </label>
              <div className={`customize-card__input ${isInputFocused ? 'customize-card__input_focus' : ''}`}>
                <DatePicker
                  name="birthdate"
                  selected={startDate}
                  onChange={handleDateChange}
                  onFocus={() => setIsInputFocused(true)} // Обработчик фокуса на поле ввода
                  onBlur={() => setIsInputFocused(false)} // Обработчик потери фокуса
                  placeholderText={isInputFocused ? '' : 'Select Date and Time'}
                  dateFormat="dd-MM-yyyy"
                  open={isInputFocused} // Показываем календарь, если поле в фокусе
                />
              </div>
              {formState.isSubmitted ? (!validateAge ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            <span className="customize-card__span">
              {formState.isSubmitted ? (startDate && !validateAge(startDate) && 'You must be at least 18 years old.') : ""}
            </span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your passport series <span
                className="customize-card__lable-span">*</span></label>
              <input
                {...register("passportSeries", {
                  required: "The series must be 4 digits",
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "The series must be 4 digits"
                  }
                })}
                type="number"
                id="passSeries-field"
                className="customize-card__input"
                min={0}
                max={9999}
                name="passportSeries"
                placeholder="0000"
              />
              {formState.isSubmitted ? (errors.passportSeries ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            {errors.passportSeries && (
              <span className="email-field-error customize-card__span">
                {errors.passportSeries.message}
              </span>
            )}
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your passport number <span
                className="customize-card__lable-span">*</span></label>
              <input
                {...register("passportNumber", {
                  required: "The series must be 6 digits",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "The series must be 6 digits"
                  }
                })}
                min={0}
                max={999999}
                type="number"
                id="passNumber-field"
                className="customize-card__input"
                required
                name="passportNumber"
                placeholder="000000"
              />
              {formState.isSubmitted ? (errors.passportNumber ? (
                <CloseRoundFill className="customize-card__icon"/>
              ) : (
                <CheckFill className="customize-card__icon"/>
              )) : ""}
            </div>
            {errors.passportNumber && (
              <span className="email-field-error customize-card__span">
                {errors.passportNumber.message}
              </span>
            )}
          </article>
        </div>
        <div className="customize-card__button-container">
          <button className="customize-card__button">Continue</button>
        </div>
      </div>
    </form>
  );
};

export default CustomizeCard;
