import React, { useState } from 'react';
import topics from '../Data/TestingInfo.json';
import './Global.css';
import { FaVial } from 'react-icons/fa'; // Test tube icon

function TestingInfo() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  const handleTopicChange = (topic) => setSelectedTopic(topic);

  const toggleComplete = () => {
    const newCompleted = new Set(completedTopics);
    newCompleted.has(selectedTopic.id)
      ? newCompleted.delete(selectedTopic.id)
      : newCompleted.add(selectedTopic.id);
    setCompletedTopics(newCompleted);
  };

  const goToNext = () => {
    const currentIndex = topics.findIndex(t => t.id === selectedTopic.id);
    if (currentIndex < topics.length - 1) setSelectedTopic(topics[currentIndex + 1]);
  };

  const goToPrevious = () => {
    const currentIndex = topics.findIndex(t => t.id === selectedTopic.id);
    if (currentIndex > 0) setSelectedTopic(topics[currentIndex - 1]);
  };

  const progress = (completedTopics.size / topics.length) * 100;

  return (
    <div className="container">
      <a
        className="toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <FaVial size={30} color={sidebarOpen ? "#ff5722" : "#4ade80"} />
      </a>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>Testing Topics</h3>
          <div className="progress-info">
            <span style={{ padding: '12px', fontWeight: 'bold', color: '#ff5722' }}>
              {completedTopics.size} / {topics.length} completed
            </span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <ul>
          {topics.map(topic => (
            <li
              key={topic.id}
              className={`${selectedTopic.id === topic.id ? 'active' : ''} ${completedTopics.has(topic.id) ? 'completed' : ''}`}
              onClick={() => handleTopicChange(topic)}
            >
              <span className="topic-number">{topic.id}</span>
              <span className="topic-title">
                <FaVial size={24} color={sidebarOpen ? "#ff5722" : "#4ade80"} />
                {topic.title}
              </span>
              {completedTopics.has(topic.id) && <span className="check-mark">✓</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h2 className="content-title">
            <FaVial size={40} color={sidebarOpen ? "#ff5722" : "#4ade80"} />
            <span className="topic-badge">{selectedTopic.id}.</span>
            {selectedTopic.title}
          </h2>
          <button className={`complete-btn ${completedTopics.has(selectedTopic.id) ? 'completed' : ''}`} onClick={toggleComplete}>
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
            {selectedTopic.questions.map((q, i) => (
              <li key={i} className="question-item">{q}</li>
            ))}
          </ol>
        </div>

        <div className="navigation-buttons">
          <button onClick={goToPrevious} disabled={selectedTopic.id === 1} className="nav-btn prev-btn">← Previous</button>
          <button onClick={goToNext} disabled={selectedTopic.id === topics.length} className="nav-btn next-btn">Next →</button>
        </div>
      </div>
    </div>
  );
}

export default TestingInfo;
