const GITHUB_USERNAME = 'MdMarufHossen71';

async function fetchGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const profile = await response.json();

    updateProfileInfo(profile);
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
  }
}

function updateProfileInfo(profile) {
  const avatar = document.getElementById('profile-avatar');
  const name = document.getElementById('profile-name');
  const bio = document.getElementById('profile-bio');
  const location = document.getElementById('profile-location');
  const followers = document.getElementById('profile-followers');

  if (avatar && profile.avatar_url) {
    avatar.src = profile.avatar_url;
  }

  if (name && profile.name) {
    name.textContent = profile.name;
  }

  if (bio && profile.bio) {
    bio.textContent = profile.bio;
  }

  if (location && profile.location) {
    location.innerHTML = `<span>📍 ${profile.location}</span>`;
  }

  if (followers && profile.followers !== undefined) {
    followers.innerHTML = `<span>👥 ${profile.followers} followers</span>`;
  }
}

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    const repos = await response.json();

    displayProjects(repos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    const list = document.getElementById('projects-list');
    if (list) {
      list.innerHTML = '<p style="color:#aaa;">Unable to load projects at this time.</p>';
    }
  }
}

function displayProjects(repos) {
  const list = document.getElementById('projects-list');
  if (!list || !Array.isArray(repos)) return;

  list.innerHTML = '';

  const filteredRepos = repos.filter(
    repo => !repo.name.toLowerCase().includes('github.io')
  );

  if (filteredRepos.length === 0) {
    list.innerHTML = '<p style="color:#aaa;">No public projects to display yet!</p>';
    return;
  }

  filteredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const description = repo.description || 'No description provided.';
    const language = repo.language || 'N/A';
    const stars = repo.stargazers_count || 0;
    const updatedDate = new Date(repo.updated_at).toLocaleDateString();

    card.innerHTML = `
      <a class="project-title" href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
      <div class="project-desc">${description}</div>
      <div class="project-info">
        <span title="Language">💻 ${language}</span>
        <span title="Stars">⭐ ${stars}</span>
        <span title="Last updated">🕒 ${updatedDate}</span>
      </div>
    `;

    list.appendChild(card);
  });
}

function initializeGitHubData() {
  fetchGitHubProfile();
  fetchGitHubRepos();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGitHubData);
} else {
  initializeGitHubData();
}
