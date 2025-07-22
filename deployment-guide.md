# 🚀 Deploy Quiz App to GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Your quiz app files ready

## Step 1: Create a GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** → "New repository"
3. **Repository settings:**
   - Repository name: `quiz-app` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file" 
   - Click **"Create repository"**

## Step 2: Clone and Add Your Files

### Option A: Using GitHub Web Interface (Easiest)

1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop** all your quiz app files:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `sample-quiz.json`
   - `README.md`
3. **Scroll down**, add commit message: "Add quiz application files"
4. **Click "Commit changes"**

### Option B: Using Git Commands

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/quiz-app.git
cd quiz-app

# Copy your quiz app files into this folder
# (copy index.html, styles.css, script.js, etc.)

# Add files to git
git add .
git commit -m "Add quiz application files"
git push origin main
```

## Step 3: Enable GitHub Pages

1. **In your repository**, go to **Settings** tab
2. **Scroll down** to "Pages" in the left sidebar
3. **Under "Source"**, select:
   - Source: **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/ (root)**
4. **Click "Save"**

## Step 4: Access Your Live Site

1. **Wait 2-5 minutes** for deployment
2. **GitHub will show you the URL:**
   ```
   Your site is live at: https://YOUR_USERNAME.github.io/quiz-app/
   ```
3. **Click the URL** to see your live quiz app! 🎉

## 🔧 Troubleshooting

### If the page shows a 404 error:
- Make sure `index.html` is in the root folder
- Wait a few more minutes for deployment
- Check the Actions tab for any build errors

### If images/files don't load:
- Ensure all file paths are relative (no leading slashes)
- Check file names match exactly (case-sensitive)

### To update your site:
1. Edit files in your repository (or push new changes)
2. GitHub Pages will automatically rebuild (takes 2-5 minutes)

## 📋 Quick Checklist

- ✅ Repository created and public
- ✅ All files uploaded to repository
- ✅ GitHub Pages enabled from Settings
- ✅ `index.html` is in the root directory
- ✅ Wait 2-5 minutes for deployment
- ✅ Test your live site URL

## 🎯 Your Quiz App Features Live:

✅ **Biblical quiz questions**  
✅ **Beautiful responsive design**  
✅ **Real-time scoring**  
✅ **Progress tracking**  
✅ **Mobile-friendly interface**  

## 🌐 Share Your Quiz

Once live, you can share your quiz URL with anyone:
- `https://YOUR_USERNAME.github.io/quiz-app/`
- Works on all devices
- No installation required
- Free hosting forever!

---

**Need help?** Check the GitHub Pages documentation or feel free to ask! 🚀 