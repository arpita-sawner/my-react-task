const { useState, useEffect, memo } = React;

const Child = memo(function Child({ name }) {
  return (
    <div className="bg-blue-50 border p-4 rounded-xl mt-4">
      <h3 className="font-bold">Child (React.memo)</h3>
      <p>Name: {name}</p>
    </div>
  );
});

function App() {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Siddharth");

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const format = (s) => {
    const h = String(Math.floor(s/3600)).padStart(2,'0');
    const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
    const sec = String(s%60).padStart(2,'0');
    return `${h}:${m}:${sec}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-5xl font-black text-blue-600">{format(seconds)}</h1>
        <p className="text-gray-400 mt-2">Timer + memo</p>
        <div className="mt-6 text-left">
          <p className="font-bold">Count: {count}</p>
          <button onClick={() => setCount(count+1)} className="bg-black text-white px-4 py-2 rounded-full mt-2">Count Badhao</button>
          <button onClick={() => setName(n=>n==="Siddharth"?"Rahul":"Siddharth")} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full">Name Badlo</button>
          <Child name={name} />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);