import "./App.css";
import "./project-card.css";
import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ProjectView } from "./ProjectView";
import { Projects } from "./Projects";
import projectJson from "./assets/projects.json";

function App() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <HashLink to={"/"} className="gdonlol">
                        Gdon.lol
                    </HashLink>
                    <div
                        style={{
                            display: "flex",
                            gap: 50,
                            justifyContent: "center",
                        }}
                        className="hero-links"
                    >
                        <HashLink to={`/projects#list`}>Projects</HashLink>
                        <a href="https://github.com/gdonlol">Github</a>
                        <a href="https://linktr.ee/gdonlol">Linktree</a>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<div></div>} />
                <Route
                    path="/projects"
                    element={<Projects projectJson={projectJson} />}
                />
                <Route
                    path="/project/:markdown"
                    element={<ProjectView projectJson={projectJson} />}
                />
                <Route path="/*" element={<div>404.</div>} />
            </Routes>
        </>
    );
}

export default App;
