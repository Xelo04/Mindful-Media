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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f1fv58a",
        "template_42r85zo",
        formRef.current!,
        "L7RyFInouxnqvx4T3"
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message: " + error.text)
      );
  };

  return (
    <div className="userStoryForm">
      <form ref={formRef} onSubmit={sendEmail}>
        <h4>How much time do you spend on social media on daily basis?</h4>
        <FormDropdownInput name="extraQuestion" options={extraQuestion} />
        <h4>What do you use social media most for or why do you use it?</h4>
        <input
          name="question1"
          type="text"
          placeholder="Your Answer"
          required
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
            <input name="email" type="email" placeholder="Your Email" />
            <h4>Any stories, messages for others you would like to add?</h4>
            <input name="story" type="text" placeholder="Your Answer" />
            <FormDropdownInput name="age" options={filtersData.age} />
            <FormDropdownInput name="gender" options={filtersData.gender} />
            <FormDropdownInput
              name="sexuality"
              options={filtersData.sexuality}
            />
            <FormDropdownInput
              name="nationality"
              options={filtersData.nationality}
            />
          </>
        )}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserStoryForm;
