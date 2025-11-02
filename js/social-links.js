const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/MdMarufHossen71' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mdmarufhossen71/' },
  { name: 'Instagram', url: 'https://www.instagram.com/mdmarufhossen999/' },
  { name: 'Facebook', url: 'https://www.facebook.com/mdmarufhossen999/' },
  { name: 'Twitter/X', url: 'https://x.com/MdMarufHossen71' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/mdmarufhossen.bsky.social' },
  { name: 'Medium', url: 'https://medium.com/@mdmarufhossen71' },
  { name: 'Behance', url: 'https://www.behance.net/mdmarufhossen71' },
  { name: 'Dribbble', url: 'https://dribbble.com/mdmarufhossen71' },
  { name: 'CodePen', url: 'https://codepen.io/mdmarufhossen71' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mdmarufhossen.71' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/mdmarufhossen71/' },
  { name: 'Reddit', url: 'https://www.reddit.com/user/MdMarufHossen71/' },
  { name: 'Quora', url: 'https://www.quora.com/profile/Md-Maruf-Hossen-109' },
  { name: 'Tumblr', url: 'https://www.tumblr.com/blog/mdmarufhossen71' },
  { name: 'Vimeo', url: 'https://vimeo.com/mdmarufhossen71' },
  { name: 'Creative Market', url: 'https://creativemarket.com/users/MdMarufHossen' },
  { name: 'ORCID', url: 'https://orcid.org/0009-0003-1978-6752' },
  { name: 'Credentials', url: 'https://www.credential.net/profile/mdmarufhossen71/wallet' }
];

function renderSocialLinks() {
  const container = document.getElementById('social-links-grid');
  if (!container) return;

  container.innerHTML = '';

  socialLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.className = 'social-link';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = link.name;

    container.appendChild(anchor);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSocialLinks);
} else {
  renderSocialLinks();
}
