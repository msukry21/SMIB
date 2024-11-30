// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

function playVideo(container) {
  const iframe = container.querySelector('iframe');
  const img = container.querySelector('img');
  const playButton = container.querySelector('svg');

  // Hide thumbnail and play button
  img.style.display = 'none';
  if (playButton) playButton.style.display = 'none';

  // Show iframe
  iframe.style.display = 'block';
}

// Default skills
const defaultSkills = [
  { name: "Matlab", url: "https://static-00.iconduck.com/assets.00/matlab-icon-1024x1014-8btna2nt.png" },
  { name: "Simulink", url: "https://logodix.com/logo/1729275.png" },
  { name: "PID", url: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3259486/pid-icon-md.png" },
  { name: "Power", url: "https://cdn-icons-png.flaticon.com/512/2317/2317243.png" },
  { name: "Transient Model", url: "https://c8.alamy.com/comp/2HC2BRW/transient-models-blue-gradient-concept-icon-2HC2BRW.jpg" },
  { name: "Math", url: "https://cdn-icons-png.freepik.com/256/3655/3655612.png" },
  { name: "Analysis", url: "https://cdn1.vectorstock.com/i/1000x1000/42/75/system-analysis-icon-linear-isolated-vector-34744275.jpg" },
  { name: "Optimasi", url: "https://static.vecteezy.com/system/resources/previews/010/927/451/non_2x/optimizing-glyph-icon-free-vector.jpg" },
  { name: "Engineer", url: "https://static.vecteezy.com/system/resources/previews/022/711/327/original/electrical-engineering-icon-illustration-electrical-worker-icon-related-to-industry-manufacturing-line-icon-style-simple-design-editable-vector.jpg" },
  { name: "Turbine", url: "https://icon-library.com/images/turbine-icon/turbine-icon-11.jpg" },
  { name: "Stabilizer", url: "https://cdn-icons-png.flaticon.com/512/5081/5081690.png" },
  { name: "Load", url: "https://cdn-icons-png.flaticon.com/512/5557/5557530.png" },
  { name: "HTML", url: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", url: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", url: "https://skillicons.dev/icons?i=js" },
  { name: "Git", url: "https://skillicons.dev/icons?i=git" },
  { name: "Next.js", url: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
  { name: "NPM", url: "https://skillicons.dev/icons?i=npm" },
  { name: "GitHub", url: "https://skillicons.dev/icons?i=github" },
  { name: "AutoCAD", url: "https://skillicons.dev/icons?i=autocad" },
  { name: "MySQL", url: "https://skillicons.dev/icons?i=mysql" },
  { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgres" },
  { name: "React", url: "https://skillicons.dev/icons?i=react" },
  { name: "Supabase", url: "https://skillicons.dev/icons?i=supabase" },
  { name: "Tailwind", url: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Vercel", url: "https://skillicons.dev/icons?i=vercel" },
  { name: "Vite", url: "https://skillicons.dev/icons?i=vite" },
  { name: "VS Code", url: "https://skillicons.dev/icons?i=vscode" },
  { name: "Python", url: "https://skillicons.dev/icons?i=py" },
  { name: "Flask", url: "https://skillicons.dev/icons?i=flask" },
  { name: "Arduino", url: "https://skillicons.dev/icons?i=arduino" },
  { name: "Anaconda", url: "https://skillicons.dev/icons?i=anaconda" },
  {
    name: "PLC",
    url: "https://th.bing.com/th?id=OIP.x4NYWn4gpwR6WqI59oq_oAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    name: "HMI",
    url: "https://th.bing.com/th?id=OIP.pAWzrf2ikGr4Qkm1uj77mwHaH0&w=243&h=256&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    name: "SCADA",
    url: "https://th.bing.com/th?id=OIP.snZanUO4lqkTacSXTur1zQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];

const container = document.getElementById("icons-container");

// Function to render icons
const renderIcons = (skills) => {
  container.innerHTML = ""; // Clear previous content
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "icon";
    div.innerHTML = `
    <img src="${skill.url}" alt="${skill.name}">
    <label>${skill.name}</label>
  `;
    container.appendChild(div);
  });
};

// Render default skills on page load
renderIcons(defaultSkills);

// Handle adding new skills
const addSkillButton = document.getElementById("add-skill");
addSkillButton.addEventListener("click", () => {
  const skillName = document.getElementById("skill-name").value.trim();
  const iconUrl = document.getElementById("icon-url").value.trim();

  if (skillName && iconUrl) {
    defaultSkills.push({ name: skillName, url: iconUrl });
    renderIcons(defaultSkills); // Re-render the icons
    document.getElementById("skill-name").value = "";
    document.getElementById("icon-url").value = "";
  } else {
    alert("Please enter both skill name and icon URL!");
  }
});