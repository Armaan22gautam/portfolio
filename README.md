# Portfolio Website

A modern, responsive portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features hero section, tech skills showcase, projects gallery, certifications, resume, and contact form.

## Features

- 🎨 Modern dark theme with cyan accents
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎯 Smooth scroll navigation
- 📧 Contact form
- 🏆 Certifications showcase
- 💼 Projects gallery
- 🎓 Resume section
- 🔗 Social media links

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero/introduction section
│   ├── TechSkills.tsx      # Technical skills showcase
│   ├── SoftSkills.tsx      # Soft skills section
│   ├── Projects.tsx        # Featured projects
│   ├── Certifications.tsx  # Certifications showcase
│   ├── Resume.tsx          # Resume section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
public/
├── images/                 # Add your images here
└── certificates/           # Add your certificate images here
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

## Customization

### Personal Information

Update the following files with your information:

- **Hero.tsx**: Update name, location, and intro text
- **TechSkills.tsx**: Add your tech stack
- **SoftSkills.tsx**: Update your soft skills
- **Projects.tsx**: Add your featured projects
- **Certifications.tsx**: Add your certificates
- **Resume.tsx**: Add resume link and update content
- **Contact.tsx**: Update contact information
- **Footer.tsx**: Update social links

### Adding Images

1. Add profile image to `public/images/`
2. Add project screenshots to `public/images/`
3. Add certificate images to `public/certificates/`
4. Update component imports to use your images

### Adding Resume

Place your resume PDF in the `public/` folder and update the link in Resume.tsx

### Colors & Styling

The portfolio uses a cyan/slate color scheme. Edit color values in component className attributes to customize the theme.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

**Made with ❤️ using Next.js, TypeScript & Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
