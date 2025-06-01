import PoppingStar from "../../components/popping-star/PoppingStar";
import TabbedPanel from "../../components/tabbed-content/TabbedPanel";
import TeamMemberSlider from "../../components/team-member-slider/TeamMemberSlider";
import "./about.scss";

const About = () => {
  const tabs = [
    {
      iconName: "diversity_1",
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
            <div className="example-images instagram">
              <img
                src="real-life-examples/building-community/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="real-life-examples/building-community/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
            <div className="example-description right">
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
                <div className="link-button">
                  <a
                    href="https://www.instagram.com/speedsisters.pzn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="example-button"
                  >
                    Click here to visit their Instagram
                  </a>
                </div>
                <br />
              </p>
              <img
                src="real-life-examples/building-community/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
          </div>

          <div className="example example-next">
            <div className="example-description left">
              <div className="example-description-title">
                <span className="title">Online Art Communities</span>
              </div>
              <p className="example-description-text">
                Online art communities illustrate how social media can foster
                both self-expression and belonging (Balogh, 2021). These
                platforms offer a unique space for individuals to share their
                creative work, receive feedback, and engage with others who
                share similar passions. Particularly during periods of social
                isolation, such as the COVID-19 pandemic, these communities
                provided vital opportunities for artists to connect, combat
                loneliness, and sustain mental well-being.
                <br />
                <br />
                Online artists with large followings, like{" "}
                <a
                  href="https://www.instagram.com/rosies.sketchbook/"
                  style={{ color: "#1d2671" }}
                  target="_blank"
                >
                  @rosies.sketchbook
                </a>{" "}
                on Instagram and{" "}
                <a
                  href="http://drawingwiffwaffles.com/#SocialLinks"
                  style={{ color: "#1d2671" }}
                  target="_blank"
                >
                  Drawingwiffwaffles
                </a>{" "}
                on YouTube, inspire thousands by sharing their creative
                journeys, sparking conversations, and building inclusive
                communities. Their content not only educates but also empowers
                followers to experiment, learn, and express themselves freely
                through art.
                <br />
                <br />
                By participating in challenges like Inktober or Draw This in
                Your Style (Agnes, 2025), users are encouraged to step out of
                their comfort zones, develop new skills, and express their
                unique artistic voice. The accessibility of these spaces often
                free and open globally lowers barriers to participation,
                allowing artists from diverse backgrounds to contribute, learn,
                and grow.
                <br />
                <br />
                Furthermore, the feedback loop within these communities promotes
                continuous learning. Constructive criticism, tips on techniques,
                and exposure to new tools or artists empower users to refine
                their skills and deepen their engagement with art as a form of
                self-expression. Online art communities demonstrate how social
                media can act as a catalyst for self-expression, fostering a
                sense of belonging while encouraging artistic growth. By
                connecting individuals with shared interests, these digital
                spaces transform isolation into creativity, helping users build
                resilience and find joy through art. #MindfulMedia advocates for
                recognizing and amplifying such positive online experiences.
                <br />
                <br />
                <div className="link-buttons">
                  <div className="link-button">
                    <a
                      href="https://www.instagram.com/rosies.sketchbook/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="example-button"
                    >
                      Click here to visit Rosies Instagram
                    </a>
                  </div>
                  <div className="link-button">
                    <a
                      href="http://drawingwiffwaffles.com/#SocialLinks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="example-button"
                    >
                      Click here to visit Drawingwiffwaffles
                    </a>
                  </div>
                </div>
                <br />
              </p>
            </div>
            <div className="example-images right instagram">
              <img
                src="real-life-examples/building-community/ig-title2.jpg"
                alt="ig-title2"
                className="example-image"
              />
              <img
                src="real-life-examples/building-community/yt-title.jpg"
                alt="yt-title"
                className="example-image"
              />
              <img
                src="real-life-examples/building-community/yt-description.png"
                alt="yt-title"
                className="example-image"
                style={{ padding: "0px" }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      iconName: "health_and_safety",
      label: (
        <>
          Learning about
          <br />
          Mental Health
        </>
      ),
      content: (
        <div className="content-container">
          <span className="title">Learning about Mental Health</span>
          <p>
            Social media now goes beyond just a space for connection and
            entertainment, it has evolved into a vital platform for mental
            health awareness, education, and advocacy (Gather Social, 2024).
            Social media provides a space for open dialogue on issues that may
            otherwise be kept in the shadows. We see how platforms like
            Instagram, TikTok, and X provide users with resources, create safe
            spaces for honest conversations, and help destigmatize mental health
            struggles. Brands and influencers alike are leveraging their reach
            to raise awareness, promote self-care, and encourage help-seeking
            behaviors.
          </p>
          <div className="example">
            <div className="example-images">
              <div className="example-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tX8TgVR33KM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="link-button">
                <a
                  href="https://www.canaries.co.uk/content/mental-health-video-made-available-to-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="example-button"
                >
                  Click here to visit their website
                </a>
              </div>
            </div>
            <div className="example-description right">
              <div className="example-description-title">
                <a
                  href="https://www.canaries.co.uk/content/mental-health-video-made-available-to-all"
                  target="_blank"
                >
                  <span className="title">You Are Not Alone</span>
                </a>
              </div>
              <p className="example-description-text">
                A standout example is Norwich City FC’s You Are Not Alone
                campaign (Norwich City Football Club, 2023), created in
                partnership with Samaritans. The emotional video highlighted
                men’s mental health struggles and the importance of checking in
                on others, sparking global conversations. With over 55 million
                views, the campaign demonstrated how powerful storytelling on
                social media can shift perceptions and drive real-world impact.
                <br />
                <br />
                Social media has the potential to make mental health information
                accessible, relatable, and actionable particularly for younger
                generations who may struggle to open up in traditional settings.
                By sharing authentic stories, promoting self-care, and
                amplifying resources, platforms and brands can foster a more
                supportive, informed digital community. #MindfulMedia reminds us
                that the right message, delivered with care, can inspire action
                and connection in a world that often feels isolating.
              </p>
            </div>
          </div>

          <div className="example example-next">
            <div className="example-description left">
              <div className="example-description-title">
                <a href="https://www.drjulie.uk/" target="_blank">
                  <span className="title">Dr. Julie Smith</span>
                </a>
              </div>
              <p className="example-description-text">
                Dr. Julie Smith (Influencer Matchmaker, n.d.) exemplifies the
                power of digital platforms in transforming mental health
                awareness into actionable support. As a clinical psychologist,
                author, and content creator, she uses her expertise to make
                mental health resources widely accessible, reaching millions
                through videos, blogs, and social media posts.
                <br />
                <br />
                With over a decade of experience in the NHS and specialized
                settings like the Ministry of Defence, Dr. Julie brings clinical
                credibility to her content. Her approach is grounded in
                evidence-based psychology, yet she communicates complex topics
                with warmth and clarity empowering her audience to understand
                mental health challenges, develop coping strategies, and seek
                help when needed. By sharing free, practical tools on platforms
                like TikTok and Instagram, Dr. Julie democratizes mental health
                education. Her community includes diverse audiences: students,
                parents, professionals, and military personnel alike. Through
                relatable, bite-sized content, she fosters a sense of connection
                and collective support making mental health education less
                clinical, more human, and deeply accessible.
                <br />
                <br />
                Dr. Julie Smith’s work illustrates how a single voice, amplified
                through social media, can build a global community of care. Her
                content not only informs but also unites people in their shared
                experiences, creating a digital space where mental health is
                normalized, and no one has to navigate their journey alone.
                #MindfulMedia celebrates leaders like Dr. Julie who make mental
                health support a shared, inclusive effort.
                <br />
                <br />
                <div className="link-button">
                  <a
                    href="https://www.drjulie.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="example-button"
                  >
                    Click here to visit her Instagram
                  </a>
                </div>
                <br />
              </p>
              <img
                src="real-life-examples/learning-about-mental-health/application.jpg"
                alt="ig-description"
                className="example-image-application"
              />
            </div>
            <div className="example-images right instagram">
              <img
                src="real-life-examples/learning-about-mental-health/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="real-life-examples/learning-about-mental-health/ig-description.jpg"
                alt="ig-description"
                className="example-image"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      iconName: "record_voice_over",
      label: (
        <>
          Self-
          <br />
          Expression
        </>
      ),
      content: (
        <div className="content-container">
          <span className="title">Self-Expression</span>
          <p>
            Social media offers many ways to express yourself, from sharing
            photos and videos to writing posts about your thoughts, feelings, or
            experiences. You can customize your profile, use emojis, and even
            create content like art, music, or memes to show who you are. For
            some people, it’s easier to open up online because there’s less
            pressure and judgment compared to face-to-face conversations. You
            have time to think about what you want to say and how you want to
            say it. Being behind a screen can give a sense of safety, especially
            for those who are shy or anxious in social settings. On social media
            it’s also a lot easier to connect with others who share similar
            interests, because it’s easier to reach a bigger audience, which can
            make self-expression feel more meaningful and accepted.
          </p>
          <div className="example">
            <div className="example-images instagram">
              <img
                src="real-life-examples/self-expression/ig-title.jpg"
                alt="ig-title"
                className="example-image"
              />
              <img
                src="real-life-examples/self-expression/ig-description.jpg"
                alt="ig-description"
                className="example-image"
                style={{ paddingBottom: "3px" }}
              />
            </div>
            <div className="example-description right">
              <div className="example-description-title">
                <a
                  href="https://www.instagram.com/radiantbambi/"
                  target="_blank"
                >
                  <span className="title">Ash Soto</span>
                </a>
              </div>
              <p className="example-description-text">
                Ash Soto, diagnosed with vitiligo at 12, initially struggled
                with self-esteem due to bullying and societal pressures
                (Lanquist, 2016). As the condition spread, she concealed her
                skin, leading to anxiety and depression. A turning point came
                when Ash began sharing her journey on Instagram, after initially
                focusing on face makeup. Gradually, she revealed her vitiligo,
                receiving overwhelming support from followers. Embracing her
                skin, she created the "Marker Chronicles," tracing her vitiligo
                patches with markers to highlight their uniqueness. This
                artistic expression not only empowered her but also inspired
                others to embrace their differences. Ash's story underscores the
                positive impact of social media in fostering self-expression and
                community support.
                <br />
                <br />
                Ash Soto's journey illustrates the transformative power of
                self-expression and community support through social media. By
                embracing her uniqueness and sharing her story, she has inspired
                countless others to do the same. Her experience highlights how
                digital platforms can serve as catalysts for personal growth and
                societal change, promoting acceptance and understanding.
                <br />
                <br />
                <div className="link-button">
                  <a
                    href="https://www.instagram.com/radiantbambi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="example-button"
                  >
                    Click here to visit her Instagram
                  </a>
                </div>
                <br />
              </p>
            </div>
          </div>
          <div className="example example-next">
            <div className="example-description left">
              <div className="example-description-title">
                <a
                  href="https://www.bbc.com/news/newsbeat-35607567"
                  target="_blank"
                >
                  <span className="title">Sophie Hawker's Story</span>
                </a>
              </div>
              <p className="example-description-text">
                While social media is often criticized for negativity, stories
                like Sophie Hawker’s reveal its transformative power in
                supporting mental health. Sophie, a 23-year-old student,
                struggled silently with anxiety until she stumbled upon a tweet
                about someone starting Cognitive Behavioural Therapy (CBT). This
                chance encounter was the catalyst she needed to recognize her
                symptoms, seek professional help, and begin her healing journey.
                By sharing her feelings online, Sophie found a community of
                people her age who understood what she was going through,
                something she hadn’t found in her immediate environment.
                Similarly, users like Madelaine shared that it was easier to
                express anxiety on platforms like Twitter or YouTube than with
                friends. For them, the anonymity and shared understanding
                fostered by social media created a safe space to process
                emotions without judgment
                <br />
                <br />
                <div className="link-button">
                  <a
                    href="https://www.bbc.com/news/newsbeat-35607567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="example-button"
                  >
                    Click here to read an article about her
                  </a>
                </div>
                <br />
              </p>
            </div>
            <div className="example-images">
              <img
                src="real-life-examples/self-expression/example2.png"
                alt="ig-title"
                className="example-image"
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
