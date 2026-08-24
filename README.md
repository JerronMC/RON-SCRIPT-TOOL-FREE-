# RON SCRIPTS v3.2

RON SCRIPTS is a mobile/desktop skin-script hub with a lightweight randomized creator quest gate.

## Gate

- No CAPTCHA / Turnstile dependency.
- Step 1 generates a random 3-task creator mission each session.
- Each task opens the official creator page and uses a real-time return/dwell check.
- After all tasks, the site generates a random mini challenge (math, sequence, or word scramble).
- Step 2 launches the main library after the challenge passes.

### Important limitation
A static GitHub Pages site cannot securely inspect whether a user subscribed/followed a third-party YouTube/TikTok account. The gate verifies the on-site quest flow (opened task, return timing, and challenge), not private platform subscription state.

## Files

- `index.html` — structure and gate
- `style.css` — responsive UI
- `script.js` — library logic, Firebase, VIP, quest gate

## Privacy / safety
Do not put Firebase admin credentials or Turnstile secrets in this repository. The CAPTCHA dependency from v3.1 has been removed from this build.
