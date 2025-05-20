import "./userStoryForm.scss";
import FormDropdownInput from "./form-dropdown-input/FormDropdownInput.tsx";
import { filtersData } from "../../data.ts";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const extraQuestion = [
  { value: "Less than an hour", label: "Less than an hour" },
  { value: "Less than 2 hours", label: "Less than 2 hours" },
  { value: "Less than 3 hours", label: "Less than 3 hours" },
  { value: "More than 3 hours", label: "More than 3 hours" },
];

const UserStoryForm = () => {
  const formRef = useRef(null);
  const [showStory, setShowStory] = useState(false);
  const [extraQuestionValue, setExtraQuestionValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [sexualityValue, setSexualityValue] = useState("");
  const [nationalityValue, setNationalityValue] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!extraQuestionValue) {
      alert("Please select missing answers.");
      return;
    }

    if (showStory) {
      if (!ageValue || !genderValue || !sexualityValue || !nationalityValue) {
        alert("Please answer all questions.");
        return;
      }
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload();
        },
        (error) => alert("Failed to send message: " + error.text)
      );
  };

  return (
    <div className="userStoryForm">
      <form ref={formRef} onSubmit={sendEmail}>
        <h4>How much time do you spend on social media on daily basis?</h4>
        <FormDropdownInput
          name="extraQuestion"
          options={extraQuestion}
          onChange={setExtraQuestionValue}
        />
        <h4>What do you use social media most for or why do you use it?</h4>
        <input
          name="question1"
          type="text"
          placeholder="Your Answer"
          required
          className="form-input"
        />
        <h4>
          Do you feel safer sharing your thoughts/emotions online than IRL?
          Please explain.
        </h4>
        <input
          name="question2"
          type="text"
          placeholder="Your Answer"
          required
          className="form-input"
        />
        <h4>
          Do you feel more connected with your friends because of social media?
          Please explain.
        </h4>
        <input
          name="question3"
          type="text"
          placeholder="Your Answer"
          required
          className="form-input"
        />
        <h4>
          Have social media ever helped you go through any difficulties? Please
          explain.
        </h4>
        <input
          name="question4"
          type="text"
          placeholder="Your Answer"
          required
          className="form-input"
        />
        <h4>
          Have you found any communities or groups on social media that made you
          feel supported or understood? Please explain.
        </h4>
        <input
          name="question5"
          type="text"
          placeholder="Your Answer"
          required
          className="form-input"
        />
        <h4>
          Would you be interested in talking with us about your responses and
          telling us more about yourself?
        </h4>
        <button
          type="button"
          className="show-story-btn"
          onClick={() => setShowStory(!showStory)}
          style={{ margin: "16px 0" }}
        >
          {showStory ? "Hide" : "Yes, I want to share my story!"}
        </button>
        {showStory && (
          <>
            <h4>Please leave your email address below.</h4>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
            <h4>Any stories, messages for others you would like to add?</h4>
            <input
              name="story"
              type="text"
              placeholder="Your Answer"
              required
              className="form-input"
            />
            <FormDropdownInput
              name="age"
              options={filtersData.age}
              onChange={setAgeValue}
            />
            <FormDropdownInput
              name="gender"
              options={filtersData.gender}
              onChange={setGenderValue}
            />
            <FormDropdownInput
              name="sexuality"
              options={filtersData.sexuality}
              onChange={setSexualityValue}
            />
            <FormDropdownInput
              name="nationality"
              options={filtersData.nationality}
              onChange={setNationalityValue}
            />
          </>
        )}
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default UserStoryForm;
