import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { EventDetails, EventsContext, SortByCategory } from "./utility/context";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const FormPage = lazy(() => import("./pages/FormPage/FormPage.jsx"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage.jsx"));

function App() {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [sortByCategory, setSortByCategory] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("events"))
      setEvents(JSON.parse(localStorage.getItem("events")));
  }, []);
  useEffect(() => {
    if (localStorage.getItem("event"))
      setEventDetails(JSON.parse(localStorage.getItem("event")));
  }, []);
  

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <EventsContext.Provider value={{ events, setEvents }}>
        <EventDetails.Provider value={{ eventDetails, setEventDetails }}>
          <SortByCategory.Provider
            value={{ sortByCategory, setSortByCategory }}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/details" element={<DetailsPage />} />
              </Route>
            </Routes>
          </SortByCategory.Provider>
        </EventDetails.Provider>
      </EventsContext.Provider>
    </Suspense>
  );
}

export default App;
