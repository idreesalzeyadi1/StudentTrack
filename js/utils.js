import { auth, db } from './firebase-config.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export function toast(msg, type = 'success') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span> ${msg}`;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

export async function requireRole(expectedRole) {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = '../index.html';
        return reject();
      }
      const snap = await getDoc(doc(db, 'users', user.uid));
      const role = snap.data()?.role;
      if (role !== expectedRole) {
        window.location.href = '../index.html';
        return reject();
      }
      resolve({ user, data: snap.data() });
    });
  });
}

export async function doSignOut() {
  await signOut(auth);
  window.location.href = '../index.html';
}
