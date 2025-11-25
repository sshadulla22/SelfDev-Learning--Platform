import React, { useState } from 'react';
import topics from '../Data/reactTopics.json';
import { useNavigate } from 'react-router-dom';
import './Global.css';
import { FaReact } from 'react-icons/fa';

function ReactInfo() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);

    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const toggleComplete = () => {
    const newCompleted = new Set(completedTopics);

    if (newCompleted.has(selectedTopic.id)) {
      newCompleted.delete(selectedTopic.id);
    } else {
      newCompleted.add(selectedTopic.id);
    }

    setCompletedTopics(newCompleted);
  };

  const goToNext = () => {
    const currentIndex = topics.findIndex(t => t.id === selectedTopic.id);

    if (currentIndex < topics.length - 1) {
      setSelectedTopic(topics[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    const currentIndex = topics.findIndex(t => t.id === selectedTopic.id);

    if (currentIndex > 0) {
      setSelectedTopic(topics[currentIndex - 1]);
    }
  };

  const progress = (completedTopics.size / topics.length) * 100;

  return (
    <div className="container">

      {/* Sidebar Toggle */}
      <a
        className="toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <FaReact size={30} color={sidebarOpen ? "#667eea" : "#4ade80"} />
      </a>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3 className="nav-title">React Topics</h3>

          <div className="progress-info">
            <span style={{ padding: "12px", fontWeight: "bold", color: "#667eea" }}>
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
              className={`${selectedTopic.id === topic.id ? 'active' : ''} 
                          ${completedTopics.has(topic.id) ? 'completed' : ''}`}
              onClick={() => handleTopicChange(topic)}
            >
              <span className="topic-number">{topic.id}</span>

              <span className="topic-title">
                <FaReact size={24} color={sidebarOpen ? "#667eea" : "#4ade80"} />
                {topic.title}
              </span>

              {completedTopics.has(topic.id) && (
                <span className="check-mark">✓</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
         <h2 className="content-title" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <FaReact size={30} /> {/* No margin needed, gap handles spacing */}
  <span className="topic-badge">{selectedTopic.id}.</span>
  <span>{selectedTopic.title}</span>
</h2>


          {/* Button to go to Hooks Page */}
          <button
            className="complete-btn"
            onClick={() => navigate('/hooks')}
          >
            Hooks
          </button>

          {/* Mark Complete */}
          <button
            className={`complete-btn ${completedTopics.has(selectedTopic.id) ? 'completed' : ''}`}
            onClick={toggleComplete}
          >
            {completedTopics.has(selectedTopic.id) ? "✓ Completed" : "Mark Complete"}
          </button>
        </div>

        {/* Overview Section */}
        <div className="content-section">
          <h3>Overview</h3>
          <p style={{ whiteSpace: "pre-line" }}>{selectedTopic.content}</p>
        </div>

        {/* Practice Questions */}
        <div className="content-section">
          <h3>Practice Questions</h3>

          <ol className="questions-list">
            {selectedTopic.qa_pairs?.map((qa, index) => (
              <li key={index} className="question-item">
                <strong>Q:</strong> {qa.question} <br />
                <strong>A:</strong> {qa.answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            onClick={goToPrevious}
            disabled={selectedTopic.id === 1}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>

          <button
            onClick={goToNext}
            disabled={selectedTopic.id === topics.length}
            className="nav-btn next-btn"
          >
            Next →
          </button>
        </div>
      </div>

    </div>
  );
}

export default ReactInfo;
