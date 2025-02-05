const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


document.addEventListener('DOMContentLoaded', function() {
  const loginPopup = document.getElementById('loginPopup');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skipLoginBtn = document.getElementById('skipLogin');

  // Check if user has already interacted with the popup in this session
  const hasInteracted = sessionStorage.getItem('hasInteracted');

  // Show popup only if user hasn't interacted with it in this session
  if (!hasInteracted) {
    loginPopup.style.display = 'flex';
  }

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.tab === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
      } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
      }
    });
  });

  // Form submission
  loginForm.addEventListener('submit', handleLogin);
  signupForm.addEventListener('submit', handleSignup);

  // Skip login
  skipLoginBtn.addEventListener('click', handleSkip);

  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Add your login logic here
    console.log('Login:', email, password);
    // If login is successful:
    setInteracted();
    closePopup();
  }

  function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    // Add your signup logic here
    console.log('Signup:', name, email, password);
    // If signup is successful:
    setInteracted();
    closePopup();
  }

  function handleSkip() {
    console.log('Skipped login');
    setInteracted();
    closePopup();
  }

  function setInteracted() {
    sessionStorage.setItem('hasInteracted', 'true');
  }

  function closePopup() {
    loginPopup.style.display = 'none';
  }
});