// Note: export default zaruri hai React.lazy ke liye
function About() {
  return (
    <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl mt-6">
      <h2 className="text-2xl font-black text-green-800">About Page</h2>
      <p className="mt-2 text-gray-600">Ye page lazy load hua hai! Iska code pehle load nahi hua tha, ab jab button dabaya tabhi aaya hai.</p>
      <p className="mt-2 text-sm text-green-600">⚡️ Performance fast hoti hai isse.</p>
    </div>
  );
}

// Babel wale setup ke liye ye line important hai
// Real React project (Vite) me: export default About
const AboutExport = About;