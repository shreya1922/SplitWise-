import React, { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);

  // Monitor authentication status
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      <h1>Expense Splitter</h1>
      {!user ? (
        <AuthPage setUser={setUser} />
      ) : (
        <div>
          <h2>Welcome {user.email}</h2>
          {/* Add the functionality for expense splitting here */}
        </div>
      )}
    </div>
  );
};

export default App;
