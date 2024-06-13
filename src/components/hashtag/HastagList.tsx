import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

const HastagList = () => {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} onSelectCompany={selectCompany} />
      ))}
    </ul>
  );
};

export default HastagList;
