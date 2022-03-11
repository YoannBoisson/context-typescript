import * as React from 'react';

import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper';
import './styles.css';
import Test from './components/Test'

export default function App() {
  return (
    <ThemeProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>My App</h1>
<Test />
          </main>
        </ThemeWrapper>
    </ThemeProvider>
  );
}
