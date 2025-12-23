# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS, inspired by the Picto template.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.10-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.14-cyan)

## ✨ Features

- 🎨 Modern, clean design with purple accent color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Vite
- 🎭 Smooth animations and transitions
- 🧭 Sticky navigation with smooth scrolling
- 📊 Portfolio showcase with project cards
- 📝 Blog section
- 💼 Services/Skills section
- 💬 Testimonials slider
- 📬 Contact form
- 🔝 Scroll-to-top button
- 🎯 SEO optimized

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "c:\Users\tukar\OneDrive\Desktop\my website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The site will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL shown in your terminal

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

#### Update Hero Section (`src/components/Hero.jsx`)

```javascript
// Line ~15-20
<p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
  Hello, I'm
  <span className="block mt-2">Your Name Here</span>  {/* ← Change this */}
</p>

// Line ~22-26
<p className="text-sm sm:text-lg lg:text-[18px] my-6 text-gray-600">
  I'm a Freelance <span className="bg-highlight">Your Title</span>{' '}
  and <span className="bg-highlight">Your Role</span> based in
  Your Location. Your introduction text here...
</p>

// Update stats (Line ~10-13)
const stats = [
  { id: 1, title: 'Experience', value: '15 Y.' },      {/* ← Change values */}
  { id: 2, title: 'Projects Completed', value: '250+' },
  { id: 3, title: 'Happy Clients', value: '58' },
]
```

#### Update About Section (`src/components/About.jsx`)

```javascript
// Line ~19-24
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
  Your Full Name  {/* ← Change this */}
</h2>
<p className="text-picto-primary text-lg font-medium mb-4">
  Your Professional Title  {/* ← Change this */}
</p>

// Update bio text (Line ~26-34)
<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  Your bio here...  {/* ← Change this */}
</p>
```

#### Update Contact Information (`src/components/Contact.jsx`)

```javascript
// Line ~27-40
const contactInfo = [
  {
    icon: <FiMapPin />,
    title: 'Address',
    description: 'Your Address',  {/* ← Change this */}
  },
  {
    icon: <FiMail />,
    title: 'My Email',
    description: 'your@email.com',  {/* ← Change this */}
  },
  {
    icon: <FiPhone />,
    title: 'Call Me Now',
    description: 'Your Phone Number',  {/* ← Change this */}
  },
]
```

### 2. Social Media Links

Update in multiple files:

**`src/components/About.jsx`** (Line ~7-12)
**`src/components/Contact.jsx`** (Line ~42-47)
**`src/components/Footer.jsx`** (Line ~17-22)

```javascript
const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile' },  {/* ← Change */}
  { icon: <FaGithub />, url: 'https://github.com/yourusername' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourhandle' },
  { icon: <FaInstagram />, url: 'https://instagram.com/yourhandle' },
]
```

### 3. Add Your Images

Create an `images` folder in the `public` directory:

```
public/
  └── images/
      ├── person.png          (Your main profile photo)
      ├── project1.jpg        (Portfolio project images)
      ├── project2.jpg
      ├── project3.jpg
      ├── project4.jpg
      ├── project5.jpg
      ├── project6.jpg
      ├── blog1.jpg           (Blog post images)
      ├── blog2.jpg
      ├── blog3.jpg
      └── blog4.jpg
```

**Recommended Image Sizes:**
- Profile photo: 536x636px
- Project images: 426x300px
- Blog images: 370x240px

**Then update the image paths:**

**Hero Section** (`src/components/Hero.jsx`, Line ~56):
```javascript
// Replace the placeholder div with:
<img 
  src="/images/person.png" 
  alt="Your Name" 
  className="w-full h-full object-cover rounded-3xl shadow-2xl"
/>
```

**About Section** (`src/components/About.jsx`, Line ~21):
```javascript
// Replace the placeholder div with:
<img 
  src="/images/person.png" 
  alt="Profile Photo"
  className="w-full h-full object-cover rounded-xl"
/>
```

### 4. Update Portfolio Projects

Edit `src/components/Portfolio.jsx` (Line ~5-60):

```javascript
const projects = [
  {
    id: 1,
    category: 'YOUR CATEGORY',              {/* ← Change */}
    title: 'Your Project Title',            {/* ← Change */}
    description: 'Your project description...',  {/* ← Change */}
    image: '/images/project1.jpg',          {/* ← Update path */}
    link: 'https://yourproject.com',        {/* ← Change */}
  },
  // Add more projects...
]
```

### 5. Update Blog Posts

Edit `src/components/Blog.jsx` (Line ~5-30):

```javascript
const blogPosts = [
  {
    id: 1,
    date: '22 Oct, 2020',                   {/* ← Change */}
    comments: 246,                          {/* ← Change */}
    title: 'Your Blog Post Title',          {/* ← Change */}
    image: '/images/blog1.jpg',             {/* ← Update path */}
    link: 'https://yourblog.com/post1',     {/* ← Change */}
  },
  // Add more blog posts...
]
```

### 6. Update Services

Edit `src/components/Services.jsx` (Line ~5-25):

```javascript
const services = [
  {
    id: 1,
    title: 'Your Service Title',            {/* ← Change */}
    description: 'Your service description...',  {/* ← Change */}
    icon: <FiMonitor />,                    {/* ← Change icon */}
  },
  // Add more services...
]
```

### 7. Update Testimonials

Edit `src/components/Testimonials.jsx` (Line ~8-35):

```javascript
const testimonials = [
  {
    id: 1,
    message: 'Short testimonial message...',     {/* ← Change */}
    quote: 'Longer detailed testimonial...',     {/* ← Change */}
    name: 'Client Name',                         {/* ← Change */}
    designation: 'Client Position, Company',     {/* ← Change */}
  },
  // Add more testimonials...
]
```

### 8. Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'picto-primary': '#9929fb',        // Main purple color
  'picto-primary-dark': '#650fa0',   // Darker purple for hover
  'soft-white': '#f0f1f3',          // Light background
  'soft-dark': '#87909d',           // Gray text
}
```

### 9. Update Navigation & Footer

Edit `src/components/Navbar.jsx` (Line ~36-40):
Edit `src/components/Footer.jsx` (Line ~40):

```javascript
// Change "Brooklyn" to your name
<span className="text-2xl sm:text-[32px] font-semibold ml-3">
  Your Name  {/* ← Change this */}
</span>
```

### 10. Update Email Link

Edit `src/components/Hero.jsx` (Line ~28):
Edit `src/components/Services.jsx` (Line ~46):

```javascript
<a href="mailto:your@email.com">  {/* ← Change email */}
```

## 📁 Project Structure

```
my-website/
├── public/
│   └── images/              # Your images go here
├── src/
│   ├── components/
│   │   ├── About.jsx        # Profile/About section
│   │   ├── Blog.jsx         # Blog posts grid
│   │   ├── Contact.jsx      # Contact form & info
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── Hero.jsx         # Hero/Introduction section
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Portfolio.jsx    # Portfolio projects
│   │   ├── ScrollToTop.jsx  # Scroll to top button
│   │   ├── Services.jsx     # What I do section
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── WorkProcess.jsx  # Work process steps
│   │   └── WorkTogether.jsx # CTA section
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy!

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repo-name/',  // Your repository name
     plugins: [react()],
   })
   ```
4. Deploy: `npm run deploy`

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **Swiper** - Testimonials slider

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Get your form endpoint
4. Update `src/components/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    alert('Thank you! I will get back to you soon.')
    setFormData({ name: '', email: '', location: '', budget: '', message: '' })
  }
}
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow EmailJS React documentation

## 🎨 Customization Tips

- **Fonts**: Change font in `tailwind.config.js` and `index.html`
- **Animations**: Add more in `src/index.css`
- **Sections**: Add/remove sections in `src/App.jsx`
- **Colors**: Update in `tailwind.config.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

**Issue: Port 3000 is already in use**
- Solution: Change port in `vite.config.js` or kill the process using port 3000

**Issue: Images not showing**
- Solution: Ensure images are in `public/images/` folder
- Check image paths start with `/images/`

**Issue: Smooth scroll not working**
- Solution: Make sure `react-scroll` is installed: `npm install react-scroll`

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

- Design inspired by [Picto Template](https://themewagon.com/themes/picto) by ThemeWagon
- Built with love using React + Vite + Tailwind CSS

## 💡 Need Help?

If you have questions or need help customizing:
1. Check the comments in the code
2. Read this README carefully
3. Google search specific issues
4. Ask in React or Tailwind CSS communities

---

**Made with ❤️ | Happy Coding! 🚀**
# my-website
