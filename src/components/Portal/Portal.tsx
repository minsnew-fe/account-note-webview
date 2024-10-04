import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: PropsWithChildren) => {
  return <React.Fragment>{ReactDOM.createPortal(children, document.body)}</React.Fragment>;
};

export default Portal;
