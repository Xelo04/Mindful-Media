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
          <div className="example">
            <div className="example-images">
              <img
                src="../../../public/real-life-examples/building-community/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="../../../public/real-life-examples/building-community/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
            <div className="example-description">
              <div className="example-description-title">
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                >
                  <span className="title">Speedsisters.pzn</span>
                </a>
              </div>
              <p className="example-description-text">
                Speedsisters.pzn is a run club for girls from Poznań, an amazing
                community of girls supporting other girls, while staying healthy
                and safe.
                <br />
                <br />
                It started with just a few girls exercising together near
                Rusałka Lake. Then, they started inviting more people over,
                created an Instagram and Tiktok account, published some posts
                and reached a wide audience.
                <br />
                <br />
                Now dozens of women meet twice a week, to run and enjoy their
                time together. On Strava, a website to track your working-out
                progress and cheer up others, they now have 120 members.
                <br />
                <br />
                Not only have they established new friendships, they also
                motivate themselves, provide support for each other and
                encourage a lot of women to start working out.
                <br />
                <br />
                What’s also important, their freshly built community allows them
                to run with more confidence. Unfortunately, women still cannot
                feel completely safe alone in the woods, but running as a huge
                group reduces most of the possible risks (we believe, you know,
                what we’re talking about).
                <br />
                <br />
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                  className="example-link-button"
                >
                  <button className="example-button">
                    Click here to visit their website
                  </button>
                </a>
                <br />
              </p>
              <img
                src="../../../public/real-life-examples/building-community/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
          </div>
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
          <div className="example">
            <div className="example-images">
              <img
                src="../../../public/real-life-examples/building-community/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="../../../public/real-life-examples/building-community/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
            <div className="example-description">
              <div className="example-description-title">
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                >
                  <span className="title">Speedsisters.pzn</span>
                </a>
              </div>
              <p className="example-description-text">
                Speedsisters.pzn is a run club for girls from Poznań, an amazing
                community of girls supporting other girls, while staying healthy
                and safe.
                <br />
                <br />
                It started with just a few girls exercising together near
                Rusałka Lake. Then, they started inviting more people over,
                created an Instagram and Tiktok account, published some posts
                and reached a wide audience.
                <br />
                <br />
                Now dozens of women meet twice a week, to run and enjoy their
                time together. On Strava, a website to track your working-out
                progress and cheer up others, they now have 120 members.
                <br />
                <br />
                Not only have they established new friendships, they also
                motivate themselves, provide support for each other and
                encourage a lot of women to start working out.
                <br />
                <br />
                What’s also important, their freshly built community allows them
                to run with more confidence. Unfortunately, women still cannot
                feel completely safe alone in the woods, but running as a huge
                group reduces most of the possible risks (we believe, you know,
                what we’re talking about).
                <br />
                <br />
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                  className="example-link-button"
                >
                  <button className="example-button">
                    Click here to visit their website
                  </button>
                </a>
                <br />
              </p>
              <img
                src="../../../public/real-life-examples/building-community/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
          </div>
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
          <div className="example">
            <div className="example-images">
              <img
                src="../../../public/real-life-examples/building-community/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="../../../public/real-life-examples/building-community/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
            <div className="example-description">
              <div className="example-description-title">
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                >
                  <span className="title">Speedsisters.pzn</span>
                </a>
              </div>
              <p className="example-description-text">
                Speedsisters.pzn is a run club for girls from Poznań, an amazing
                community of girls supporting other girls, while staying healthy
                and safe.
                <br />
                <br />
                It started with just a few girls exercising together near
                Rusałka Lake. Then, they started inviting more people over,
                created an Instagram and Tiktok account, published some posts
                and reached a wide audience.
                <br />
                <br />
                Now dozens of women meet twice a week, to run and enjoy their
                time together. On Strava, a website to track your working-out
                progress and cheer up others, they now have 120 members.
                <br />
                <br />
                Not only have they established new friendships, they also
                motivate themselves, provide support for each other and
                encourage a lot of women to start working out.
                <br />
                <br />
                What’s also important, their freshly built community allows them
                to run with more confidence. Unfortunately, women still cannot
                feel completely safe alone in the woods, but running as a huge
                group reduces most of the possible risks (we believe, you know,
                what we’re talking about).
                <br />
                <br />
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                  className="example-link-button"
                >
                  <button className="example-button">
                    Click here to visit their website
                  </button>
                </a>
                <br />
              </p>
              <img
                src="../../../public/real-life-examples/building-community/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
          </div>
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
          <div className="example">
            <div className="example-images">
              <img
                src="../../../public/real-life-examples/building-community/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="../../../public/real-life-examples/building-community/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
            <div className="example-description">
              <div className="example-description-title">
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                >
                  <span className="title">Speedsisters.pzn</span>
                </a>
              </div>
              <p className="example-description-text">
                Speedsisters.pzn is a run club for girls from Poznań, an amazing
                community of girls supporting other girls, while staying healthy
                and safe.
                <br />
                <br />
                It started with just a few girls exercising together near
                Rusałka Lake. Then, they started inviting more people over,
                created an Instagram and Tiktok account, published some posts
                and reached a wide audience.
                <br />
                <br />
                Now dozens of women meet twice a week, to run and enjoy their
                time together. On Strava, a website to track your working-out
                progress and cheer up others, they now have 120 members.
                <br />
                <br />
                Not only have they established new friendships, they also
                motivate themselves, provide support for each other and
                encourage a lot of women to start working out.
                <br />
                <br />
                What’s also important, their freshly built community allows them
                to run with more confidence. Unfortunately, women still cannot
                feel completely safe alone in the woods, but running as a huge
                group reduces most of the possible risks (we believe, you know,
                what we’re talking about).
                <br />
                <br />
                <a
                  href="https://www.instagram.com/speedsisters.pzn/"
                  target="_blank"
                  className="example-link-button"
                >
                  <button className="example-button">
                    Click here to visit their website
                  </button>
                </a>
                <br />
              </p>
              <img
                src="../../../public/real-life-examples/building-community/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
          </div>
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
