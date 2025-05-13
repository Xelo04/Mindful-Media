import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <section className="title-container">
        <div className="title">
          <span>#Mindful</span>
          <span>Media</span>
        </div>
      </section>
      <section className="about-us">
        <h1>ABOUT US</h1>
        <div className="about-us-container">
          <p>
            We are a team of passionate individuals dedicated to creating
            meaningful and impactful media content. Our mission is to inspire,
            educate, and entertain through our work. We believe in the power of
            storytelling and its ability to connect people from all walks of
            life.
          </p>
          <img src="logo.png" alt="logo" />
        </div>
      </section>
    </div>
  );
};

export default About;
