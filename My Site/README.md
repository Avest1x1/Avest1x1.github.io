# Portfolio Setup

## Folder structure

```
portfolio/
  index.html
  css/
    style.css
  js/
    main.js
    particles.min.js    <-- PUT THIS HERE (from your master.zip)
  assets/
    icons/
      github.svg
      roblox.svg
    images/
      bg.jpg            <-- your background image goes here
      pfp.png           <-- your profile picture goes here
```

## particles.js setup

1. Open the master.zip you downloaded from particles.js
2. Find `particles.min.js` inside it
3. Drop it into the `js/` folder in this project

That's it. The page checks if particles loaded before trying to init,
so it won't crash even if the file is missing.

## GitHub Pages

1. Push the whole portfolio/ folder contents to a repo named `yourusername.github.io`
2. Enable GitHub Pages in repo settings (branch: main, root or /docs)
3. Done. Live at https://yourusername.github.io

## Updating

- GitHub link: index.html, find the GitHub `<a>` tag and update the href
- About me text: index.html, find the `<p class="about-text">` and replace the placeholder
- Skills: index.html, update the skill-card blocks however
