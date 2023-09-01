import * as React from 'react';


const SvgMoneyDuotone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 40 40" { ...props }>
    <path
      fill="#2A4157"
      fillOpacity={ 0.24 }
      d="M5 14c0-1.886 0-2.828.586-3.414C6.172 10 7.114 10 9 10h22c1.886 0 2.828 0 3.414.586C35 11.172 35 12.114 35 14v12c0 1.886 0 2.828-.586 3.414C33.828 30 32.886 30 31 30H9c-1.886 0-2.828 0-3.414-.586C5 28.828 5 27.886 5 26V14Z"
    />
    <circle cx={ 20.333 } cy={ 20.333 } r={ 3.333 } fill="#222" />
    <rect width={ 3 } height={ 1 } x={ 8 } y={ 13 } fill="#222" rx={ 0.5 } />
    <rect width={ 3 } height={ 1 } x={ 29 } y={ 26 } fill="#222" rx={ 0.5 } />
  </svg>
);
export default SvgMoneyDuotone;
