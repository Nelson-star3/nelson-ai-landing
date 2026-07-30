# NELSON AI — Landing Page

A ready-to-deploy landing page for **nelsonai.netlify.app**
Built by Nelson Company · Uganda 🇺🇬

---

## Quick Start

1. **Add your photos** → put 8 screenshots in the `images/` folder
   (see `images/README.txt` for exact filenames)

2. **Add your videos** → put 6 screen-recordings in the `videos/` folder
   (see `videos/README.txt` for exact filenames)

3. **Add your songs** → put 5 mp3 files in the `audio/` folder
   (see `audio/README.txt` for exact filenames)

4. **Edit texts** → open `index.html` and search for `✏️ EDIT:` — every section
   that needs your words is marked with that comment (this includes
   `privacy.html` and `terms.html`, which are starter templates you
   should customize and have reviewed before publishing)

5. **Upload to GitHub** → push all files to your repository

6. **Redeploy on Netlify** → Netlify will pick up the changes automatically

---

## File Structure

```
nelson-ai-landing/
├── index.html          ← Main landing page (edit texts here)
├── privacy.html         ← Privacy Policy (starter template — customize!)
├── terms.html           ← Terms of Service (starter template — customize!)
├── style.css            ← All styles (edit colours in :root at the top)
├── script.js            ← Navbar, scroll reveal, lightbox, video/audio detection
├── images/
│   ├── README.txt       ← Instructions for adding photos
│   ├── nelsonai_photo1.png   ← Add these yourself
│   ├── nelsonai_photo2.png
│   ├── nelsonai_photo3.png
│   ├── nelsonai_photo4.png
│   ├── nelsonai_photo5.png
│   ├── nelsonai_photo6.png
│   ├── nelsonai_photo7.png
│   └── nelsonai_photo8.png
├── videos/
│   ├── README.txt       ← Instructions for adding videos
│   ├── nelsonai_video1.mp4   ← Add these yourself
│   ├── nelsonai_video2.mp4
│   ├── nelsonai_video3.mp4
│   ├── nelsonai_video4.mp4
│   ├── nelsonai_video5.mp4
│   └── nelsonai_video6.mp4
└── audio/
    ├── README.txt       ← Instructions for adding songs
    ├── nelsonai_song1.mp3   ← Add these yourself
    ├── nelsonai_song2.mp3
    ├── nelsonai_song3.mp3
    ├── nelsonai_song4.mp3
    └── nelsonai_song5.mp3
```

---

## Sections On The Page

| Section | What it shows |
|---------|--------------|
| **Navbar** | Logo, nav links, "Launch App" → nelsonai.netlify.app |
| **Hero** | Big headline + `nelsonai_photo1.png` as app screenshot |
| **Features** | 6 feature cards (Gemini, Image Gen, Voice, Offline, Code, Login) |
| **Gallery** | 8-photo grid — photos 1 & 8 are wider "featured" slots |
| **Videos** | 6 video cards with built-in HTML5 player + placeholders |
| **Songs** | 5 audio players with optional cover art + placeholders |
| **How It Works** | 3-step process |
| **FAQ** | 5 common questions, expandable |
| **CTA** | Final call-to-action → nelsonai.netlify.app |
| **Footer** | Links, Privacy/Terms, Uganda branding |

---

## Changing Colours

Open `style.css` and edit the `:root` block at the very top:

```css
:root {
  --cyan:   #00d4ff;   /* Change to your accent colour */
  --purple: #a855f7;   /* Change to your secondary colour */
  --bg:     #08080f;   /* Page background */
  --text:   #e2e2f0;   /* Main text colour */
}
```

---

## Netlify Settings (if asked)

- **Publish directory:** `nelson-ai-landing/` (or root if you put files at root)
- **Build command:** *(leave empty — no build needed, pure HTML/CSS/JS)*
- **Node version:** *(not needed)*

---

© 2026 Nelson Company · Kireka, Uganda
