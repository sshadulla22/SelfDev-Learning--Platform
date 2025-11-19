import React, { useState } from 'react';
import jsTopics from '../Data/jsTopics.json';
import { FaJsSquare } from 'react-icons/fa';
import './Global.css';

function JavaScriptInfo() {
  const [selectedTopic, setSelectedTopic] = useState(jsTopics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  const handleTopicChange = (topic) => setSelectedTopic(topic);

  const toggleComplete = () => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(selectedTopic.id)) newCompleted.delete(selectedTopic.id);
    else newCompleted.add(selectedTopic.id);
    setCompletedTopics(newCompleted);
  };

  const goToNext = () => {
    const currentIndex = jsTopics.findIndex(t => t.id === selectedTopic.id);
    if (currentIndex < jsTopics.length - 1) setSelectedTopic(jsTopics[currentIndex + 1]);
  };

  const goToPrevious = () => {
    const currentIndex = jsTopics.findIndex(t => t.id === selectedTopic.id);
    if (currentIndex > 0) setSelectedTopic(jsTopics[currentIndex - 1]);
  };

  const progress = (completedTopics.size / jsTopics.length) * 100;

  return (
    <div className="container">
      <a
        className="toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <FaJsSquare size={30} color={sidebarOpen ? "#f0db4f" : "#4ade80"} />
      </a>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>JavaScript Topics</h3>
          <div className="progress-info">
            <span style={{ padding: '12px', fontWeight: 'bold', color: '#f0db4f' }}>
              {completedTopics.size} / {jsTopics.length} completed
            </span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <ul>
          {jsTopics.map(topic => (
            <li
              key={topic.id}
              className={`${selectedTopic.id === topic.id ? 'active' : ''} ${completedTopics.has(topic.id) ? 'completed' : ''}`}
              onClick={() => handleTopicChange(topic)}
            >
              <span className="topic-number">{topic.id}</span>
              <span className="topic-title"><FaJsSquare size={24} color="#f0db4f" />{topic.title}</span>
              {completedTopics.has(topic.id) && <span className="check-mark">✓</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h2 className="content-title">
            <FaJsSquare size={40} color="#f0db4f" />
            <span className="topic-badge">{selectedTopic.id}.</span>
            {selectedTopic.title}
          </h2>
          <button
            className={`complete-btn ${completedTopics.has(selectedTopic.id) ? 'completed' : ''}`}
            onClick={toggleComplete}
          >
            {completedTopics.has(selectedTopic.id) ? '✓ Completed' : 'Mark Complete'}
          </button>
        </div>

        <div className="content-section">
          <h3>Overview</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{selectedTopic.content}</p>
        </div>

        <div className="content-section">
          <h3>Practice Questions</h3>
          <ol className="questions-list">
            {selectedTopic.questions.map((question, index) => (
              <li key={index} className="question-item">{question}</li>
            ))}
          </ol>
        </div>

        <div className="navigation-buttons">
          <button onClick={goToPrevious} disabled={selectedTopic.id === 1} className="nav-btn prev-btn">← Previous</button>
          <button onClick={goToNext} disabled={selectedTopic.id === jsTopics.length} className="nav-btn next-btn">Next →</button>
        </div>
      </div>
    </div>
  );
}

export default JavaScriptInfo;
