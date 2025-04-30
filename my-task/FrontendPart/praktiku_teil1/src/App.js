import React, { useState } from "react";
import "./App.css";
import Login from "./Login"; // Login bileşenini içeri aktar
import Register from "./Register"; // Register bileşenini içeri aktar

function App() {
  const [isLogin, setIsLogin] = useState(true); // Kullanıcı login mi yoksa register mı olduğunu kontrol eder

  const toggleForm = () => {
    setIsLogin(!isLogin); // Giriş formu ve kayıt formu arasında geçiş yap
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        {isLogin ? <Login /> : <Register />}
        <button onClick={toggleForm}>
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </header>
    </div>
  );
}

export default App;
