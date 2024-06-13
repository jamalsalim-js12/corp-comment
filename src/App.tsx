import { useEffect } from "react";
import HastagList from "./components/hashtag/HastagList";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

const App = () => {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />
      </FeedbackItemsContextProvider>

      <HastagList />
    </div>
  );
};

export default App;
