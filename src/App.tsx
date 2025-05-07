import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import OurStories from "./pages/our-stories/OurStories";
import YourStory from "./pages/your-story/YourStory";
import Navbar from "./components/navbar/Navbar";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
        {/* <Footer /> */}
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
          element: <Home />,
        },
        {
          path: "/about",
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
