import React from 'react';
import './_CustomizeCard.scss'

const CustomizeCard = () => {
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
              <label htmlFor="email-field" className="customize-card__lable">E-mail <span className="customize-card__lable-span">*</span></label>
              <input
                type="text"
                id="email-field"
                className="customize-card__input"
                minLength={2}
                maxLength={40}
                required
                name="email"
                placeholder="For Example Doe"
                // value={isEditing ? formValue.email : currentUser.email}
                // onChange={handleControl}
              />
            </div>
            <span className="email-field-error customize-card__span"></span>
          </article>
        </div>
      </div>
    </form>
  );
};

export default CustomizeCard;
