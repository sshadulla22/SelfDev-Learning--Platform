import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Braces, Palette, FileCode, Server, FileType, GitBranch, Globe, Clock,
  Database, Wrench, Zap, TestTube, Shield, Rocket, Link2, Bug, Star, Layers, Binary
} from 'lucide-react';
import './nav.css';

function Nav() {

  const topics = [
    { name: 'React', icon: Code2, route: '/react-info' },
    { name: 'JavaScript', icon: Braces, route: '/javascript-info' },
    { name: 'CSS', icon: Palette, route: '/css-Info' },
    { name: 'HTML', icon: FileCode, route: '/html' },
    { name: 'Node.js', icon: Server, route: '/nodejs-info' },
    { name: 'TypeScript', icon: FileType, route: '/typescript' },
    { name: 'Git & GitHub', icon: GitBranch, route: '/git' },
    { name: 'Web APIs', icon: Globe, route: '/webapi' },
    { name: 'Testing', icon: TestTube, route: '/testing' },
    { name: 'Security', icon: Shield, route: '/security' },
    { name: 'Deployment', icon: Rocket, route: '/deployment' },
    { name: 'REST APIs', icon: Link2, route: '/restapi' },
    { name: 'Data Structures', icon: Binary, route: '/data-structures' },
    { name: 'Algorithms', icon: Binary, route: '/algorithms' },
    { name: 'Databases', icon: Database, route: '/databases' }
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-menu">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <li key={index}>
              <Link to={topic.route} className="nav-item">
                <Icon size={18} />
                <span>{topic.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
