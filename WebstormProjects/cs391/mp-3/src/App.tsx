import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Work from "./components/mains/Work";
import Leadership from "./components/mains/Leadership";
import Projects from "./components/mains/Projects";
import Skills from "./components/mains/Skills";

function Root() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "*",
        element: <Root />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
