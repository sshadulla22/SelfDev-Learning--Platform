import React, { useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback } from "react";

// Custom Hook Example
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

// useContext setup
const ThemeContext = React.createContext('light');
const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return (
    <p style={{ color: theme === 'dark' ? '#DCDCDC' : '#2D2D2D', marginTop: '10px' }}>
      Current Theme: <strong>{theme}</strong>
    </p>
  );
};

// useReducer setup
const initialCounterState = { count: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
};

export default function ReactHookDemo() {
  // --- Styling ---
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "20px",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#000000ff",
      color: "#E0E0E0",
      minHeight: "100vh",
      lineHeight: "1.6",
    },
    section: {
      marginBottom: "0px",
      padding: "30px",
      borderRadius: "10px",
      backgroundColor: "#101010ff",
    },
    sectionHeading: {
      fontSize: "24px",
      color: "#BB86FC",
      marginBottom: "15px",
    },
    codeBox: {
      backgroundColor: "#0D0D0D",
      color: "#C3F8FF",
      padding: "15px",
      borderRadius: "8px",
      fontSize: "14px",
      marginTop: "10px",
      overflowX: "auto",
      border: "1px solid #373737",
    },
    button: {
      padding: "10px 15px",
      margin: "5px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "#03DAC6",
      color: "#000000",
      border: "none",
    },
    input: {
      padding: "10px",
      marginRight: "10px",
      borderRadius: "6px",
      border: "1px solid #373737",
      background: "#333333",
      color: "#E0E0E0",
    },
  };

  // --- React Hook Examples ---
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');
  useDocumentTitle(`Count: ${count}`);

  const inputRef = useRef(null);
  const mutableValueRef = useRef(0);
  const focusInput = () => {
    inputRef.current.focus();
    mutableValueRef.current += 1;
    console.log("Mutable Ref:", mutableValueRef.current);
  };

  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000000; i++) num += 1;
    return num;
  };
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
  const incrementCount = useCallback(() => setCount(c => c + 1), []);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={styles.container}>

        {/* Introduction */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Introduction to React Hooks</h2>
          <p>
            React Hooks are functions that allow functional components to use state and lifecycle features.
            They make code simpler, reusable, and eliminate the need for class components.
          </p>
          <ul>
            <li>Follow Rules of Hooks: Call only at top-level of component or custom hook, not inside loops or conditions.</li>
          </ul>
        </div>

        {/* useState */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>1. useState 🎣 (State Management)</h2>
          <p>useState lets you add state to functional components. Each call returns a state variable and a setter function.</p>
          <div style={styles.codeBox}>
            {`const [state, setState] = useState(initialValue);`}
          </div>
          <button style={styles.button} onClick={incrementCount}>Increase Count ({count})</button>
          <button style={styles.button} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Theme ({theme})
          </button>
        </div>

        {/* useEffect */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>2. useEffect 🚀 (Side Effects)</h2>
          <p>useEffect handles side-effects such as API calls, subscriptions, timers, or DOM manipulations.</p>
          <p>Document title: {document.title}</p>
          <div style={styles.codeBox}>
            {`useEffect(() => {
  document.title = 'Count: ' + count;
}, [count]);`}
          </div>
        </div>

        {/* useRef */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>3. useRef 📌 (DOM & Mutable Values)</h2>
          <p>useRef accesses DOM elements or stores mutable values without triggering re-renders.</p>
          <input style={styles.input} ref={inputRef} placeholder="Click button to focus" />
          <button style={styles.button} onClick={focusInput}>Focus Input</button>
          <p>Mutable ref value: {mutableValueRef.current}</p>
          <div style={styles.codeBox}>
            {`const inputRef = useRef(null);
const mutableValueRef = useRef(0);`}
          </div>
        </div>

        {/* useContext */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>4. useContext 🌐 (Global State)</h2>
          <p>useContext provides global state to avoid prop drilling. Example: themes or user settings.</p>
          <ThemeDisplay />
        </div>

        {/* useReducer */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>5. useReducer 🧠 (Complex State)</h2>
          <p>useReducer is an alternative to useState for complex state logic.</p>
          <p>Current Count: {state.count}</p>
          <button style={styles.button} onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button style={styles.button} onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
          <button style={styles.button} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>

        {/* useMemo & useCallback */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>6. useMemo & 7. useCallback ⚡ (Performance)</h2>
          <p>useMemo memoizes expensive calculations. useCallback memoizes functions to avoid re-creation.</p>
          <ul>
            <li>useMemo → {memoizedValue}</li>
            <li>useCallback → incrementCount()</li>
          </ul>
        </div>

        {/* Custom Hooks */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Custom Hooks 🛠️</h2>
          <p>Custom hooks are reusable logic built with hooks. Example: dynamically update document title.</p>
          <div style={styles.codeBox}>
            {`const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};`}
          </div>
        </div>

        {/* End */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>End of Hooks Information ✅</h2>
          <p>All major React hooks have been covered with examples and best practices.</p>
        </div>

      </div>
    </ThemeContext.Provider>
  );
}
