import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpVoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpVoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };
  return (
    <li
      onClick={() => setOpen(!open)}
      className={`feedback ${open ? "feedback--expand" : ""}`}>
      <button onClick={handleUpVote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      {/* <p>{feedbackItem.daysAgo}d</p> */}
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
