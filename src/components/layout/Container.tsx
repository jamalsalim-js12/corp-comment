import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

const Container = () => {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
};

export default Container;
