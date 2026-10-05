import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

function Header() {
  return (
    <header style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px" }}>
      <h1>My Portfolio</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f1f1f1", padding: "10px", textAlign: "center", marginTop: "20px" }}>
      <p>© 2025 My Portfolio | Built with ❤️ in React</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
