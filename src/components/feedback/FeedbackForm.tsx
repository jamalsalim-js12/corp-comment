import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [showValidIndicators, setShowValidIndicators] = useState(false);

  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicators(true);
      setTimeout(() => {
        setShowValidIndicators(false);
      }, 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => {
        setShowInvalidIndicator(false);
      }, 2000);
      return;
    }
    onAddToList(text);
    setText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showValidIndicators ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      } `}>
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
