# Harrison Grant — Engineering Portfolio

A simple, self-hosted portfolio website. No frameworks, no build tools — just plain HTML, CSS, and JavaScript files you can host anywhere.

---

## 📁 File Structure

```
portfolio/
├── index.html        ← Home page (don't edit)
├── project.html      ← Project detail template (don't edit)
├── resume.html       ← Resume & contact page (don't edit)
├── style.css         ← Styles (don't edit)
├── projects.js       ← ⭐ YOUR DATA — edit this file!
├── images/           ← Your project images go here
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   ├── resume.pdf
│   ├── resume-preview.jpg
│   ├── coin-collector-thumb.jpg
│   ├── coin-collector-1.jpg
│   └── ... etc
└── README.md         ← This file
```

**The only file you need to edit is `projects.js`.** Everything else is generated automatically from that data.

---

## 🆕 How to Add a New Project

### Step 1: Add your images
Drop your project images into the `images/` folder. Use descriptive names like `my-project-thumb.jpg`, `my-project-1.jpg`, etc.

### Step 2: Edit `projects.js`
Open `projects.js` in any text editor. Copy this template and paste it at the **top** of the `PROJECTS` array (right after the opening `[`):

```javascript
  {
    id: "my-new-project",
    title: "My New Project",
    subtitle: "A short description for the card",
    thumbnail: "images/my-project-thumb.jpg",
    heroTitle: "My New Project — Full Title",
    sections: [
      {
        heading: "The Problem",
        text: "Describe the problem or challenge here."
      },
      {
        heading: "Photos",
        images: [
          "images/my-project-1.jpg",
          "images/my-project-2.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "Describe the result here."
      }
    ]
  },
```

### Step 3: Save and refresh
That's it! Refresh your browser and the new project appears.

---

## ✏️ How to Edit Your Info

At the bottom of `projects.js` you'll find `SITE_CONFIG`. Change your about text, contact info, or hero images there:

```javascript
const SITE_CONFIG = {
  name: "Harrison Grant",
  email: "hgrant@bu.edu",
  phone: "781-535-1233",
  aboutText: "Your bio goes here...",
  // ...etc
};
```

---

## 🖼️ Image Tips

- **Thumbnails**: Aim for roughly 600×450px (4:3 ratio). These show on the home page cards.
- **Project images**: Any size works, but landscape (wider than tall) looks best. Aim for 1200px wide.
- **Hero images**: Portrait orientation (taller than wide) at roughly 800×1000px.
- **Formats**: `.jpg`, `.png`, or `.webp` all work.
- **File names**: Use lowercase with dashes, no spaces (e.g., `my-project-photo.jpg`).

---

## 🌐 How to Host This Site

### Option A: GitHub Pages (free, easiest)
1. Create a GitHub account and a new repository
2. Upload all these files to the repository
3. Go to Settings → Pages → set source to "main" branch
4. Your site will be live at `https://yourusername.github.io/reponame`

### Option B: Netlify (free, drag and drop)
1. Go to [netlify.com](https://www.netlify.com) and sign up
2. Drag your entire `portfolio` folder onto the deploy area
3. Done — you get a URL instantly

### Option C: Any web host
Upload all files to your hosting provider via FTP or their file manager. The site is pure static files — it works anywhere.

---

## 🤖 Updating with an LLM (like Claude)

You can paste the contents of `projects.js` into a conversation with Claude or ChatGPT and say something like:

> "Here's my portfolio data file. Can you add a new project called [name]? Here's the description: [your text]. The images are called [filenames]."

The LLM will give you back the updated `projects.js` content. Just replace your file with it.

You can also ask:
- "Rewrite my about text to sound more professional"
- "Reorder my projects so [project] is first"  
- "Add a new section to the [project] page with this text: ..."

---

## 📐 Section Types

Each project has `sections` — an array of content blocks. Each section can have any combination of:

| Field     | What it does                          | Required? |
|-----------|---------------------------------------|-----------|
| `heading` | Section title (e.g., "The Problem")   | Optional  |
| `text`    | Paragraph text (use `\n\n` for breaks)| Optional  |
| `images`  | Array of image paths                  | Optional  |

Mix and match however you like. A section with just `images` makes a photo gallery. A section with just `text` makes a prose block.
