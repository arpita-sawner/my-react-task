import Header from "../components/Header";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import ProfileCard from "../components/ProfileCard";
import CounterApp from "../components/CounterApp";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import Posts from "../components/Posts";
import LoginForm from "../components/LoginForm";
import Parent from "../components/Parent";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>

        <Greeting name="Priya" topic="React Components" />
        <Greeting name="Rohan" topic="JSX & Props" />

        <div className="card-container">
          <ProfileCard
            name="Arjun Kumar"
            role="Frontend Developer"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <ProfileCard
            name="Sneha Verma"
            role="UI/UX Designer"
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>

        <CounterApp />
        <UserForm />
      </main>

      <UserList />
      <Posts />
      <Footer />
      <LoginForm />
      <Parent />
    </div>
  );
}

export default Home;
