import PoppingStar from "../../components/popping-star/PoppingStar";
import TabbedPanel from "../../components/tabbed-content/TabbedPanel";
import TeamMemberSlider from "../../components/team-member-slider/TeamMemberSlider";
import "./about.scss";

const About = () => {
  const tabs = [
    {
      iconName: "handshake",
      label: (
        <>
          Building
          <br />
          Community
        </>
      ),
      content: (
        <div className="content-container">
          <span className="title">Building community</span>
          <p>
            Building a community through social media - whether online or in
            real life - can have a powerful, positive impact on mental health.
            It allows people to connect with others who share similar interests,
            hobbies, values, or experiences, creating a sense of belonging and
            support. These digital spaces can provide a platform for open
            conversations about mental health, reducing stigma and encouraging
            people to seek help when needed. Social media also makes it easier
            to maintain long-distance relationships or find niche communities
            that might not exist locally. When used mindfully, these connections
            can reduce feelings of isolation and loneliness. Engaging with a
            positive and encouraging community can boost self-esteem and provide
            emotional validation. Over time, these supportive interactions can
            foster resilience and a greater sense of well-being.
          </p>
          div.
        </div>
      ),
    },
    {
      iconName: "person",
      label: (
        <>
          Making
          <br />
          Connections
        </>
      ),
      content: (
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Content for Tab 2</h2>
          <p>Unique structure for the second tab.</p>
        </div>
      ),
    },
    {
      iconName: "settings",
      label: (
        <>
          Learning about
          <br />
          Mental Health
        </>
      ),
      content: (
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Content for Tab 3</h2>
          <p>Another layout here.</p>
        </div>
      ),
    },
    {
      iconName: "info",
      label: (
        <>
          Self-
          <br />
          expressing
        </>
      ),
      content: (
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Content for Tab 4</h2>
          <p>Something else entirely.</p>
        </div>
      ),
    },
  ];
  return (
    <div className="about">
      <section className="title-container">
        <div className="star" id="star1">
          <PoppingStar width={100} height={100} delayPercent={50} />
        </div>
        <div className="star" id="star2">
          <PoppingStar width={120} height={120} delayPercent={60} />
        </div>
        <div className="star" id="star3">
          <PoppingStar width={40} height={40} />
        </div>
        <div className="star" id="star4">
          <PoppingStar width={80} height={80} delayPercent={80} />
        </div>
        <div className="star" id="star5">
          <PoppingStar width={140} height={140} delayPercent={70} />
        </div>
        <div className="star" id="star6">
          <PoppingStar width={50} height={50} delayPercent={50} />
        </div>
        <div className="star" id="star7">
          <PoppingStar width={40} height={40} delayPercent={20} />
        </div>
        <div className="star" id="star8">
          <PoppingStar width={80} height={80} delayPercent={40} />
        </div>
        <div className="star" id="star9">
          <PoppingStar width={40} height={40} />
        </div>
        <div className="star" id="star10">
          <PoppingStar width={40} height={40} delayPercent={30} />
        </div>
        <div className="star" id="star11">
          <PoppingStar width={60} height={60} delayPercent={70} />
        </div>
        <div className="star" id="star12">
          <PoppingStar width={100} height={100} delayPercent={50} />
        </div>
        <div className="star" id="star13">
          <PoppingStar width={120} height={120} delayPercent={60} />
        </div>
        <div className="star" id="star14">
          <PoppingStar width={40} height={40} />
        </div>
        <div className="star" id="star15">
          <PoppingStar width={80} height={80} delayPercent={80} />
        </div>
        <div className="star" id="star16">
          <PoppingStar width={140} height={140} delayPercent={90} />
        </div>
        <div className="star" id="star17">
          <PoppingStar width={50} height={50} delayPercent={40} />
        </div>
        <div className="star" id="star18">
          <PoppingStar width={40} height={40} delayPercent={20} />
        </div>
        <div className="star" id="star19">
          <PoppingStar width={80} height={80} delayPercent={40} />
        </div>
        <div className="star" id="star20">
          <PoppingStar width={40} height={40} />
        </div>
        <div className="star" id="star21">
          <PoppingStar width={40} height={40} delayPercent={30} />
        </div>
        <div className="title">
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

      <section className="tabbed-panel">
        <div className="tabbed-panel-content">
          <TabbedPanel tabs={tabs} />
        </div>
      </section>

      <section className="meet-us">
        <h2>MEET US</h2>
        <div className="team-member-slider">
          <TeamMemberSlider />
        </div>
      </section>
    </div>
  );
};

export default About;
