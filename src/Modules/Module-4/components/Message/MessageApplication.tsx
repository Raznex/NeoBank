import React from 'react';
import { useLocation } from 'react-router-dom';

import './_Message.scss';


const MessageApplication = () => {
  const location = useLocation();

  return (
    <div className="message">
      <p className={ `${location.pathname === '/loan/applicationId/document' ? 'message__title' : 'message__title_hidden'}` }>Documents are formed</p>
      <p className={ `${location.pathname === '/loan/applicationId/document' ? 'message__text' : 'message__text_hidden'}` }>Documents for signing will be sent to your email</p>
      <p className={ `${location.pathname === '/loan/applicationId' ? 'message__title' : 'message__title_hidden'}` }>Wait for a decision on the application</p>
      <p className={ `${location.pathname === '/loan/applicationId' ? 'message__text' : 'message__text_hidden'}` }>The answer will come to your mail within 10 minutes</p>
      <p className={ `${location.pathname === '/loan/applicationId/document/sign' ? 'message__title' : 'message__title_hidden'}` }>Documents have been successfully signed and sent for approval</p>
      <p className={ `${location.pathname === '/loan/applicationId/document/sign' ? 'message__text' : 'message__text_hidden'}` }>Within 10 minutes you will be sent a PIN code to your email for confirmation</p>
    </div>
  );
};

export default MessageApplication;
