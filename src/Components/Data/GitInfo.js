// src/Data/GitInfo.js

const topics = [
  {
    id: 1,
    title: "Introduction to Git & GitHub",
    content: "Git is a distributed version control system that tracks changes in source code during software development. GitHub is a cloud-based platform for hosting Git repositories, enabling collaboration and version management.",
    questions: [
      "What is Git and why is it used?",
      "What is GitHub and how does it differ from Git?",
      "Why use version control?"
    ]
  },
  {
    id: 2,
    title: "Installing Git",
    content: "Git can be installed on Windows, macOS, or Linux. After installation, configure user name and email using git config.",
    questions: [
      "How to install Git on different OS?",
      "How to configure Git user name and email?",
      "How to check Git version?"
    ]
  },
  {
    id: 3,
    title: "Git Basics",
    content: "Learn basic Git commands for creating repositories, adding files, committing changes, and checking the status.",
    questions: [
      "How to initialize a Git repository?",
      "What is the difference between git add and git commit?",
      "How to check repository status?"
    ]
  },
  {
    id: 4,
    title: "Git Workflow",
    content: "Understand the typical workflow: working directory → staging area → repository. Use commands like git add, git commit, git status, git log.",
    questions: [
      "Explain the Git workflow.",
      "What is the staging area?",
      "How to view commit history?"
    ]
  },
  {
    id: 5,
    title: "Branches in Git",
    content: "Branches allow you to work on different features or fixes independently. Use git branch, git checkout, and git merge.",
    questions: [
      "What is a Git branch?",
      "How to create and switch branches?",
      "How to merge branches and resolve conflicts?"
    ]
  },
  {
    id: 6,
    title: "Remote Repositories",
    content: "Remote repositories allow collaboration. GitHub stores your repository online. Use git remote, git push, git pull, git clone.",
    questions: [
      "How to connect local repo to GitHub?",
      "Difference between git push and git pull?",
      "How to clone a remote repository?"
    ]
  },
  {
    id: 7,
    title: "Git Merge & Rebase",
    content: "Merge combines branches. Rebase rewrites commit history to create a linear sequence of commits. Use carefully to maintain history.",
    questions: [
      "Difference between merge and rebase?",
      "How to resolve merge conflicts?",
      "When should you use rebase?"
    ]
  },
  {
    id: 8,
    title: "Git Stashing",
    content: "Git stash temporarily saves changes that are not ready to commit. Useful when switching branches without committing unfinished work.",
    questions: [
      "What is git stash?",
      "How to apply or pop stashed changes?",
      "Difference between stash apply and stash pop?"
    ]
  },
  {
    id: 9,
    title: "Git Tags",
    content: "Tags mark specific commits as important, usually for releases. Use lightweight tags or annotated tags.",
    questions: [
      "What is a Git tag?",
      "Difference between lightweight and annotated tags?",
      "How to create and push tags?"
    ]
  },
  {
    id: 10,
    title: "Git Reset, Revert & Checkout",
    content: "Commands to undo changes: git reset (moves HEAD), git revert (creates a new commit undoing changes), git checkout (switch branches or restore files).",
    questions: [
      "Difference between git reset and git revert?",
      "How to discard local changes?",
      "How to switch branches safely?"
    ]
  },
  {
    id: 11,
    title: "Git Config & Aliases",
    content: "Customize Git with git config. Set global settings like user name, email, default editor, and aliases for commands.",
    questions: [
      "How to set global and local Git config?",
      "How to create Git aliases?",
      "How to change default merge tool?"
    ]
  },
  {
    id: 12,
    title: "GitHub Features",
    content: "GitHub provides Pull Requests, Issues, Projects, Actions, and GitHub Pages for collaboration, CI/CD, and hosting websites.",
    questions: [
      "What is a pull request?",
      "How to create and manage issues?",
      "What is GitHub Actions?"
    ]
  },
  {
    id: 13,
    title: "Forking & Pull Requests",
    content: "Fork a repository to make changes independently. Submit a Pull Request to merge your changes into the original repository.",
    questions: [
      "What is the difference between fork and clone?",
      "How to submit a pull request?",
      "How to review pull requests?"
    ]
  },
  {
    id: 14,
    title: "Git Collaboration Best Practices",
    content: "Use feature branches, descriptive commit messages, pull requests for code review, and keep main branch stable.",
    questions: [
      "Why use feature branches?",
      "What is a good commit message?",
      "How to maintain a clean Git history?"
    ]
  },
  {
    id: 15,
    title: "Advanced Git",
    content: "Advanced topics include rebasing, cherry-picking commits, bisecting to find bugs, submodules, and hooks.",
    questions: [
      "What is git cherry-pick?",
      "How to use git bisect?",
      "What are Git hooks and how to use them?"
    ]
  },
  {
    id: 16,
    title: "End-to-End Git & GitHub Guide",
    content: "This guide covers everything from Git basics, branching, remote repositories, GitHub collaboration, advanced commands, and best practices for real-world projects.",
    questions: [
      "Create a feature branch, make changes, and submit a pull request.",
      "Resolve a merge conflict during collaboration.",
      "Use Git tags for release management."
    ]
  }
];

export default topics;
