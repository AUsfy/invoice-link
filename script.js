// Minimal demo interactivity
const emailEl = document.getElementById('email');
const signupBtn = document.getElementById('signup');
const copyBtn = document.getElementById('copyLink');
const openBtn = document.getElementById('openLink');

signupBtn.addEventListener('click', ()=>{
  const em = emailEl.value.trim();
  if(!em || !em.includes('@')){ alert('Please enter a valid email'); return; }
  signupBtn.textContent = 'Thanks — saved';
  signupBtn.disabled = true;
  // fake capture — in real use we'd POST to an API
  console.log('Signup email (demo):', em);
});

copyBtn.addEventListener('click', ()=>{
  const link = window.location.origin + '/demo/pay/0001';
  navigator.clipboard?.writeText(link).then(()=> alert('Demo payment link copied: ' + link));
});
openBtn.addEventListener('click', ()=>{
  const link = window.location.origin + '/demo/pay/0001';
  window.open(link,'_blank');
});
