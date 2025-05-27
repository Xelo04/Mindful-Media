import PoppingStar from "../../components/popping-star/PoppingStar";
import TeamMemberSlider from "../../components/team-member-slider/TeamMemberSlider";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <section className="title-container">
        <div className="title">
          <PoppingStar />
          <span className="ballet-font">#Mindful</span>
          <span className="oranienbaum-font">MEDIA</span>
        </div>
      </section>

      <section className="about-us">
        <h2>ABOUT US</h2>
        <div className="about-us-container">
          <div className="description">
            <h3>OUR MISSION</h3>
            <p>
              In today’s digital age, social media plays a powerful role in
              shaping mental health narratives. While much attention is given to
              its risks, our campaign #MindfulMedia - shifts focus to the
              positive impact social platforms can have on emotional well-being,
              community support, and self-expression. We aim to highlight how
              mindful engagement with social media can foster meaningful
              connection, encourage free self-expression, and provide emotional
              support through digital communities. By reframing the
              conversation, we advocate for a more balanced perspective that
              recognizes the potential of social media to actively support
              positive mental health outcomes when used intentionally and
              responsibly. Here you can find a lot of inspiring stories and you
              can share your own.
            </p>
          </div>
          <img src="logo.png" alt="logo" />
        </div>
      </section>

      <section className="project-description">
        <h3>THEORY SURROUNDING THE PROJECT FROM CASTRO</h3>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin pharetra nonummy pede Donec ut est in
            lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat.
            Sed at lorem in nunc porta tristique.
          </p>
          <p>
            Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor
            ac, accumsan id, felis. Pellentesque cursus sagittis felis.
            Pellentesque porttitor, velit lacinia egestas auctor, diam eros
            tempus arcu, nec vulputate augue magna vel risus. Cras non magna vel
            ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat
            volutpat. Integer ultrices lobortis eros. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Proin semper, ante vitae sollicitudin posuere, metus quam
            iaculis nibh, vitae scelerisque nunc massa eget pede. Sed velit
            urna, interdum vel, ultricies vel, faucibus at, quam. Donec elit
            est, consectetuer eget, consequat quis, tempus quis, wisi.
          </p>
          <p>
            In in nunc. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos hymenaeos. Donec ullamcorper fringilla
            eros. Fusce in sapien eu purus dapibus commodo. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Cras faucibus condimentum odio. Sed ac ligula. Aliquam at eros.
          </p>
        </div>
      </section>

      <section className="meet-us">
        <h2>MEET US</h2>
        <TeamMemberSlider />
      </section>
    </div>
  );
};

export default About;
