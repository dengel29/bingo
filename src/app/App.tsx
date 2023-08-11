import { useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
    <h1>ooh chilly billy</h1>
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          
          <h1>Welcome!</h1>
          <p>
            <button onClick={(): void => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className={styles['App-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
         
        </header>
      </div>
    </Router>
    </>
  );
}

export default App;