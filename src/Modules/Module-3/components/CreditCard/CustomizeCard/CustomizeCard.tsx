import './_CustomizeCard.scss'
import {
  CheckFill,
  CloseRoundFill,
  ExpandDown
} from "../../../../../common/assets/icon/moduleIcon/index";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomizeCard = () => {
  const [startDate, setStartDate] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleDateChange = (date:any) => {
    setStartDate(date);
    setIsInputFocused(false); // Закрываем календарь при выборе даты
  };

  return (
    <form className="customize-card">
      <div className="customize-card__container-upper">
        <div className="customize-card__container-upper-1">
          <div className="customize-card__lid">
            <h2 className="customize-card__title">Customize your&nbsp;card</h2>
            <p className="customize-card__steps">Step 1&nbsp;of&nbsp;5</p>
          </div>
          <div className="customize-card__spin">
            <p className="customize-card__spin-description">Select amount</p>
            <p className="customize-card__spin-amount">150 000</p>
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
              <label htmlFor="lastName-field" className="customize-card__lable">Your last name <span
                className="customize-card__lable-span">*</span></label>
              <input
                type="text"
                id="lastName-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                required
                name="lastName"
                placeholder="For Example Doe"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="firstName-field" className="customize-card__lable">Your first name <span
                className="customize-card__lable-span">*</span></label>
              <input
                type="text"
                id="firstName-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                required
                name="firstName"
                placeholder="For Example Jhon"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your patronymic <span
                className="customize-card__lable-span"></span></label>
              <input
                type="text"
                id="middleName-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                name="middleName"
                placeholder="For Example Victorovich"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="term-field" className="customize-card__lable">Select term <span
                className="customize-card__lable-span">*</span></label>
              <select
                id="term-field"
                className="customize-card__input customize-card__input_select"
                required
                name="term"
                // onChange={handleControl}
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
                type="email"
                id="email-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                required
                name="email"
                placeholder="test@gmail.com"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">
                Your date of birth <span className="customize-card__lable-span">*</span>
              </label>
              <div className={`customize-card__input ${isInputFocused ? 'customize-card__input_focus' : ''}`}>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  onFocus={() => setIsInputFocused(true)} // Обработчик фокуса на поле ввода
                  onBlur={() => setIsInputFocused(false)} // Обработчик потери фокуса
                  placeholderText={isInputFocused ? '' : 'Select Date and Time'}
                  dateFormat="dd-MM-yyyy"
                  open={isInputFocused} // Показываем календарь, если поле в фокусе
                />
              </div>
              <CheckFill className="customize-card__icon" />
              <CloseRoundFill className="customize-card__icon" />
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your passport series <span
                className="customize-card__lable-span">*</span></label>
              <input
                type="text"
                id="passSeries-field"
                className="customize-card__input"
                minLength={4}
                maxLength={4}
                required
                name="passSeries"
                placeholder="0000"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
          <article className="customize-card__inputs">
            <div className="customize-card__input-box">
              <label htmlFor="middleName-field" className="customize-card__lable">Your passport number <span
                className="customize-card__lable-span">*</span></label>
              <input
                type="text"
                id="passNumber-field"
                className="customize-card__input"
                minLength={6}
                maxLength={6}
                required
                name="passNumber"
                placeholder="000000"
                // onChange={handleControl}
              />
              <CheckFill className="customize-card__icon"/>
              <CloseRoundFill className="customize-card__icon"/>
            </div>
            <span className="email-field-error customize-card__span"></span>
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
