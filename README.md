# Kaushal Kumar Singh - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Security Operations Analyst with expertise in threat detection, incident response, and enterprise security solutions.

## 🌐 Live Demo

Visit the live portfolio at: `https://[your-username].github.io/[repository-name]`

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Fade-in animations on scroll
  - Animated statistics counter
  - Back-to-top button
- **Sections**:
  - Hero section with social links
  - About Me with key statistics
  - Professional Experience timeline
  - Technical Skills showcase
  - Project portfolio
  - Certifications & Education
  - Contact information

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** icon in the top right corner and select **New repository**
3. Name your repository (e.g., `portfolio` or `[your-username].github.io`)
4. Choose **Public** visibility
5. Do NOT initialize with README, .gitignore, or license (we already have files)
6. Click **Create repository**

### Step 2: Upload Your Files

#### Option A: Using Git Command Line

```bash
# Navigate to your portfolio directory
cd c:/Users/ranja/Desktop/Resume

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Select your portfolio folder (`c:/Users/ranja/Desktop/Resume`)
5. Click **Publish repository**
6. Choose your repository name and click **Publish Repository**

#### Option C: Using GitHub Web Interface

1. Go to your newly created repository on GitHub
2. Click **uploading an existing file**
3. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Wait 2-3 minutes for deployment to complete
8. Your site will be live at: `https://[your-username].github.io/[repository-name]`

### Step 4: Verify Deployment

1. Visit your GitHub Pages URL
2. Check that all sections load correctly
3. Test navigation links
4. Test mobile responsiveness (use browser developer tools)
5. Verify all social media links work

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript interactivity
└── README.md           # Documentation (this file)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: Interactive features and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

## 🎨 Customization

### Updating Personal Information

Edit [`index.html`](index.html) to update:

- Contact information (email, phone, location)
- Social media links (GitHub, LinkedIn, Credly)
- Professional experience details
- Projects and descriptions
- Certifications and education

### Changing Colors

Edit [`styles.css`](styles.css) and modify the CSS variables in `:root`:

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --secondary-color: #1e40af; /* Secondary brand color */
  --accent-color: #3b82f6; /* Accent color */
  /* ... other variables */
}
```

### Adding New Sections

1. Add HTML structure in [`index.html`](index.html)
2. Add corresponding styles in [`styles.css`](styles.css)
3. Update navigation links if needed
4. Add JavaScript interactions in [`script.js`](script.js) if required

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

## 🔧 Maintenance

### Updating Content

1. Edit the relevant HTML file
2. Test locally by opening [`index.html`](index.html) in a browser
3. Commit and push changes to GitHub:

```bash
git add .
git commit -m "Update [description of changes]"
git push origin main
```

4. Changes will appear on your live site within 2-3 minutes

### Adding Projects

1. Locate the projects section in [`index.html`](index.html) (search for `<section id="projects">`)
2. Copy an existing project card and modify the content
3. Update project icon, title, description, and tags

## 🐛 Troubleshooting

### Site Not Loading

- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes after first deployment
- Check that [`index.html`](index.html) is in the root directory
- Verify branch is set to `main` in Pages settings

### Broken Links

- Ensure all social media links are updated with your profiles
- Check that internal links use correct `#section-id` format
- Verify external links include `https://`

### Mobile Menu Not Working

- Clear browser cache
- Check browser console for JavaScript errors
- Ensure [`script.js`](script.js) is properly linked in [`index.html`](index.html)

## 📄 License

This project is open source and available for personal use.

## 📞 Contact

- **Email**: Kaushalsingh230611@gmail.com
- **Phone**: +91 7030304288
- **LinkedIn**: [kaushalkumar-singh](https://linkedin.com/in/kaushalkumar-singh)
- **GitHub**: [Kaushal061123](https://github.com/Kaushal061123)
- **Credly**: [kaushalsingh1123](https://credly.com/users/kaushalsingh1123)

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and user experience.

---

**Made with ❤️ by Kaushal Kumar Singh**
