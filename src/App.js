import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/nav.js';

import Navigation from './Components/Header/Navigation.js';
// Tech Stack Components
import ReactInfo from './Components/TechStack/ReactInfo';
import JavaScriptInfo from './Components/TechStack/JavaScriptInfo';
import HTMLInfo from './Components/TechStack/HTMLInfo';
import CSSInfo from './Components/TechStack/cssInfo.js';
import NodeJSInfo from './Components/TechStack/NodeJSInfo';
import TypeScriptInfo from './Components/TechStack/TypeScriptInfo';
import GitInfo from './Components/TechStack/GitInfo';
import WebAPIInfo from './Components/TechStack/WebAPIInfo.js';
import TestingInfo from './Components/TechStack/TestingInfo';
import SecurityInfo from './Components/TechStack/SecurityInfo';
import DeploymentInfo from './Components/TechStack/DeploymentInfo';
import RestAPIInfo from './Components/TechStack/RestAPIInfo';
import DataStructureInfo from './Components/TechStack/DataStructureInfo';
import AlgorithmInfo from './Components/TechStack/AlgorithmInfo';
import DatabaseInfo from './Components/TechStack/DatabaseInfo';
import ReactHooks from './Components/TechStack/ReactHooks.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Nav />
        <Routes>
          <Route path="/" element={<ReactInfo />} />
          <Route path="/react-info" element={<ReactInfo />} />
          <Route path="/javascript-info" element={<JavaScriptInfo />} />
          <Route path="/css-info" element={<CSSInfo />} />
          <Route path="/html" element={<HTMLInfo />} />
          <Route path="/nodejs-info" element={<NodeJSInfo />} />
          <Route path="/typescript" element={<TypeScriptInfo />} />
          <Route path="/git" element={<GitInfo />} />
          <Route path="/webapi" element={<WebAPIInfo />} />
          <Route path="/testing" element={<TestingInfo />} />
          <Route path="/security" element={<SecurityInfo />} />
          <Route path="/deployment" element={<DeploymentInfo />} />
          <Route path="/restapi" element={<RestAPIInfo />} />
          <Route path="/data-structures" element={<DataStructureInfo />} />
          <Route path="/algorithms" element={<AlgorithmInfo />} />
          <Route path="/databases" element={<DatabaseInfo />} />
          <Route path="/hooks" element={<ReactHooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
