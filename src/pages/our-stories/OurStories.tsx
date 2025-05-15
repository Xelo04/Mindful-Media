import FilteredList from "../../components/filtered-list/FilteredList";
import "./ourStories.scss";

const storiesData = [
  {
    id: 1,
    age: "26-35",
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
    age: "36-50",
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
    age: "26-35",
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
    age: "19-25",
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
    age: "26-35",
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
  age: [
    { value: "0-18", label: "0-18" },
    { value: "19-25", label: "19-25" },
    { value: "26-35", label: "26-35" },
    { value: "36-50", label: "36-50" },
    { value: "50+", label: "50+" },
  ],
  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "non-binary", label: "Non-binary" },
  ],
  race: [
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
    { value: "asian", label: "Asian" },
    { value: "latino", label: "Latino" },
    { value: "middle eastern", label: "Middle Eastern" },
  ],
  sexuality: [
    { value: "straight", label: "Straight" },
    { value: "gay", label: "Gay" },
    { value: "bisexual", label: "Bisexual" },
    { value: "pansexual", label: "Pansexual" },
    { value: "asexual", label: "Asexual" },
  ],
  nationality: [
    { value: "american", label: "American" },
    { value: "japanese", label: "Japanese" },
    { value: "canadian", label: "Canadian" },
    { value: "mexican", label: "Mexican" },
    { value: "egyptian", label: "Egyptian" },
  ],
};

// const selectOptions = {
//   flavour: [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ],
//   gender: [
//     { value: "female", label: "Female" },
//     { value: "male", label: "Male" },
//     { value: "non-binary", label: "Non-binary" },
//   ],
//   wawa: [
//     { value: "female", label: "Female" },
//     { value: "male", label: "Male" },
//     { value: "non-binary", label: "Non-binary" },
//     { value: "no-binary", label: "Non-binary" },
//     { value: "n-binary", label: "Non-binary" },
//     { value: "binary", label: "Non-binary" },
//   ],
// };

const OurStories = () => {
  return (
    <div className="ourStories">
      <h1>Our Stories</h1>
      <FilteredList selectOptions={filtersData} storiesData={storiesData} />
    </div>
  );
};

export default OurStories;
