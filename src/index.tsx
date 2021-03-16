import { render } from 'react-dom';
import { App } from './App';
import { SidebarProvider } from './contexts/SidebarContext';

render(
  <SidebarProvider selectedGenreId={1}>
    <App />
  </SidebarProvider>,
  document.getElementById('root')
);
