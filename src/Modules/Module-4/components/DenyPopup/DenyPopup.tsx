import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './_DenyPopup.scss';
import { useAppDispatch } from '../../utils/hooks/redux';
import { denyUser } from '../../utils/store/Reducer/prescoringSlice';


interface IPopup {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const DenyPopup: React.FC<IPopup> = ({ isOpen, setIsOpen }) => {
  const [isDeny, setIsDeny] = useState(false);
  const dispatch = useAppDispatch();
  const { applicationId } = useParams();
  const closePopup = () => {
    setIsOpen(false);
  };

  const handleClickDeny = () => {
    if (applicationId !== undefined) {
      dispatch(denyUser(applicationId));
      setIsDeny(true);
    }
  };

  return (
    <div className={ `popup ${isOpen ? 'popup_is-open' : ''}` }>
      <div className="popup__container">
        <div className="popup__up">
          <h2 className="popup__title">Deny application</h2>
          <button type="button" className="popup__close" onClick={ closePopup } />
        </div>
        { isDeny ? (
          <p className="popup__text">You exactly sure, you want to cancel this application?
          </p>
        )
          : (
            <p className="popup__text">Your application has been deny!
            </p>
          ) }
        <div className="popup__buttons">
          { isDeny ? (
            <>
              <button type="button" className="popup__button" onClick={ handleClickDeny }>Deny</button>
              <button type="button" className="popup__button popup__button_cancel" onClick={ closePopup }>Cancel</button>
            </>
          ) : (
            <a href="/loan" className="popup__button popup__button_switch">Go home
            </a>
          ) }
        </div>
      </div>
    </div>
  );
};

export default DenyPopup;
