import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

const Header = () => {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
};

export default Header;
