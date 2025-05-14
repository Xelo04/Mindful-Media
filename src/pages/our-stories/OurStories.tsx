import FiltersList from "../../components/filters-list/FiltersList";

import "./ourStories.scss";

const data = [
  {
    id: 1,
    age: "26-35", // was 29
    gender: "Female",
    race: "Asian",
    sexuality: "Bisexual",
    nationality: "Japanese",
    shortDescription: "Freelance graphic designer from Tokyo.",
    longDescription:
      "Aiko is a creative professional who specializes in branding and digital illustration. She enjoys traveling, minimalist design, and often volunteers for local art education programs in Japan.",
  },
  {
    id: 2,
    age: "36-50", // was 42
    gender: "Male",
    race: "Black",
    sexuality: "Straight",
    nationality: "American",
    shortDescription: "High school history teacher and father of two.",
    longDescription:
      "Marcus has been teaching for over 15 years and is passionate about making history accessible and engaging for all students. Outside of school, he coaches youth basketball and writes historical fiction.",
  },
  {
    id: 3,
    age: "26-35", // was 35
    gender: "Non-binary",
    race: "White",
    sexuality: "Pansexual",
    nationality: "Canadian",
    shortDescription: "Tech entrepreneur and startup mentor.",
    longDescription:
      "Jordan founded their first company at age 23 and now works as a mentor for tech startups in Vancouver. They advocate for inclusive innovation and enjoy hiking in British Columbia's forests.",
  },
  {
    id: 4,
    age: "19-25", // was 24
    gender: "Male",
    race: "Latino",
    sexuality: "Gay",
    nationality: "Mexican",
    shortDescription: "Aspiring actor with a passion for musical theatre.",
    longDescription:
      "Diego moved to Mexico City to pursue his acting career and has performed in several local productions. He's a classically trained singer and hopes to one day appear on Broadway.",
  },
  {
    id: 5,
    age: "26-35", // was 31
    gender: "Female",
    race: "Middle Eastern",
    sexuality: "Asexual",
    nationality: "Egyptian",
    shortDescription: "Software engineer and open-source contributor.",
    longDescription:
      "Leila specializes in backend development and is an advocate for women in STEM. She contributes to open-source projects and runs a mentorship program for young girls interested in coding in Cairo.",
  },
];

const filtersData = {
  age: ["0-18", "19-25", "26-35", "36-50", "50+"],
  gender: ["Male", "Female", "Non-binary"],
  race: ["White", "Black", "Asian", "Latino", "Middle Eastern"],
  sexuality: ["Straight", "Gay", "Bisexual", "Pansexual", "Asexual"],
  nationality: ["American", "Japanese", "Canadian", "Mexican", "Egyptian"],
};

const OurStories = () => {
  return (
    <div className="ourStories">
      <h1>Our Stories</h1>
      <span>no elo</span>
      <FiltersList
        data={data}
        filtersData={filtersData}
        renderItem={(item) => (
          <>
            <strong>{item.age}</strong> - {item.gender} - {item.race} -{" "}
            {item.sexuality} - {item.nationality}
            <br />
            <p>{item.shortDescription}</p>
          </>
        )}
      />
    </div>
  );
};

export default OurStories;
