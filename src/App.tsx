import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import OurStories from "./pages/our-stories/OurStories";
import YourStory from "./pages/your-story/YourStory";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/our-stories",
          element: <OurStories />,
        },
        {
          path: "/your-story",
          element: <YourStory />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
