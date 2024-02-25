import { createRoot } from 'react-dom/client';

import { RuntimeProvider } from './context';
import { Demo } from './Demo';
import './styles.css'
createRoot(document.getElementById('root')!).render(
  <RuntimeProvider>
    <Demo />
  </RuntimeProvider>
);
