import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <span className="title">You’re Not Alone.</span>
        <p>
          Struggling with your mental health can feel isolating, overwhelming,
          and sometimes even hopeless. But there is strength in seeking support
          - not weakness. Whether it's talking to a trusted friend, reaching out
          to a family member, or connecting with a mental health helpline or
          organization, help is available. This campaign is here to remind you
          that your feelings are valid, your life matters, and there are people
          who care and want to help. It’s okay to not be okay. What matters most
          is knowing that you're never alone - and taking that first step to
          reach out could be the start of a better tomorrow
        </p>
        <div className="findhelpline">
          <img src="findahelpline-logo.svg" alt="" />
          <span>
            GO TO{" "}
            <a
              href="https://findahelpline.com/"
              target="_blank"
              style={{ color: "#5292c2" }}
            >
              FINDHELPLINE.COM
            </a>{" "}
            TO FIND
            <br />
            HELPLINE FOR YOUR NEEDS.
          </span>
        </div>
        <img
          src="contact-page/1.jpg"
          alt="1"
          className="background-photo"
          id="photo1"
        />
        <img
          src="contact-page/2.jpg"
          alt="2"
          className="background-photo"
          id="photo2"
        />
        <img
          src="contact-page/3.jpg"
          alt="3"
          className="background-photo"
          id="photo3"
        />
        <div className="text">
          <span>You don’t have to go through this alone.</span>
          <p>
            If you are struggling today, need support with your mental health,
            or have experienced a traumatic event, consider contacting a
            helpline. It’s free, anonymous and confidential.
          </p>
        </div>
        <div className="text">
          <span>What are helplines?</span>
          <p>
            Helplines (also known as hotlines or crisis lines) provide immediate
            crisis counseling, emotional support and information – for free.
            Most helpline phone numbers are toll-free and many helplines are
            available over text message or online chat. Helplines are often
            available 24/7, so you can contact them at any time of the day or
            night.
          </p>
        </div>
        <div className="text">
          <span>How will a helpline support me?</span>
          <p>
            Helplines provide a judgment-free space for you to talk through
            difficult emotions and experiences, receive support, and connect to
            other resources that can help you. Talking helps, and research has
            shown that people feel less distressed after contacting helplines.
          </p>
        </div>
        <div className="text">
          <span>What can I talk to a helpline about?</span>
          <p>
            The most common types of helpline are suicide prevention hotlines,
            domestic violence hotlines and sexual assault hotlines. However,
            helplines are available for a wide range of mental health and
            emotional struggles including anxiety, depression, gender or sexual
            identity, substance use and much more. You don't have to be suicidal
            or in a severe situation to contact a helpline. You might just need
            to talk, or want information on supporting others. How do I find the
            best helpline for me? In some countries, many helplines are
            available. For example, if you live in the United States, popular
            nationwide helplines are the 988 Suicide & Crisis Lifeline, Crisis
            Text Line and TrevorLifeline. When you search for a helpline on Find
            A Helpline, our intelligent ranking algorithm will recommend the
            best helplines for you. You can also further filter according to
            your needs, and read helpline descriptions to learn more about the
            service each helpline provides. Because helplines are free, you can
            contact more than one service to find the right one for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
