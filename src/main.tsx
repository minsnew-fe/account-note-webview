import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
);
