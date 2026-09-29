const presenceBadge = document.querySelector('#live-presence');
const presenceCount = document.querySelector('#live-presence-count');
const presenceLabel = document.querySelector('#live-presence-label');
const presenceDb = window.SipCityDb;

function updatePresenceCount(count) {
  if (!presenceBadge || !presenceCount || !presenceLabel) return;
  const validCount = Number.isInteger(count) && count > 0;
  presenceBadge.hidden = !validCount;
  if (!validCount) return;
  presenceCount.textContent = String(count);
  presenceLabel.textContent = 'browsing now';
  presenceBadge.setAttribute('aria-label', `${count} active browser ${count === 1 ? 'session' : 'sessions'}`);
}

if (presenceDb?.watchActiveVisitors) {
  try {
    const stopWatchingPresence = presenceDb.watchActiveVisitors(updatePresenceCount);
    window.addEventListener('pagehide', () => stopWatchingPresence?.(), { once: true });
  } catch (error) {
    console.error(error);
    updatePresenceCount(null);
  }
}
