# SrujanTube - YouTube-Inspired Portfolio

Welcome to my YouTube-styled portfolio website, built with Next.js, TypeScript, and Tailwind CSS. This project showcases my development work, experience, and achievements in a familiar YouTube interface.

## Overview

This portfolio presents my projects, skills, and professional journey through a YouTube-like interface, offering visitors an intuitive and engaging way to explore my work. The design mimics YouTube's user experience with projects presented as "videos," a channel page highlighting my background, and various sections for education, achievements, and certifications.

## Features

- **YouTube-inspired Interface**: Familiar navigation, video cards, and channel layout
- **Project Showcase**: Projects displayed as video cards with thumbnails and descriptions
- **Channel Page**: Personal profile with tabs for different sections:
  - Projects - Showcasing my development work
  - About - Professional summary and skills
  - Experience - Work history and accomplishments
  - Education - Academic background
  - Certifications - Professional certifications
  - Achievements - Awards, contributions, and other accomplishments
- **Responsive Design**: Mobile-friendly layout adapting to different screen sizes
- **Dark Mode Support**: Automatic light/dark theme based on system preferences

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Custom components inspired by YouTube
- **Icons**: Heroicons for clean, consistent iconography
- **Date Formatting**: date-fns for relative time calculations

## Project Structure

```
youtube-portfolio/
├── app/                  # Next.js app router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── video/[id]/       # Video detail pages
│   └── channel/          # Channel page
├── components/           # React components
│   ├── layout/           # Layout components (Navbar, Sidebar)
│   ├── ui/               # UI components (VideoCard, CategoryPills)
│   └── sections/         # Page sections (VideoGrid, VideoPlayer)
├── types/                # TypeScript type definitions
├── data/                 # Projects and categories data
└── public/               # Static assets (images, thumbnails)
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/srujanchidarla/youtube-portfolio.git
   cd youtube-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/srujanchidarla/youtube-portfolio)

## Customization

### Adding Projects

1. Edit the `data/videos.ts` file to add your own projects:

   ```typescript
   {
     id: '9',
     title: 'Your New Project Title',
     thumbnail: '/thumbnails/your-project.jpg',
     description: 'Project description...',
     // Add other fields as needed
   }
   ```

2. Add project thumbnails to the `public/thumbnails/` directory.

### Updating Personal Information

1. Edit the `channelInfo` object in `app/channel/page.tsx` to update your profile information.
2. Replace `/profile.jpg` in the public directory with your own profile picture.

## Contact

Feel free to reach out if you have any questions or would like to connect:

- Email: srujanchidarla99@gmail.com
- Portfolio: [srujan.tech](https://srujan.tech)
- LinkedIn: [linkedin.com/in/srujanchidarla](https://linkedin.com/in/srujanchidarla)
- GitHub: [github.com/srujanchidarla](https://github.com/srujanchidarla)

## Acknowledgements

- Design inspired by YouTube's interface
- Icons from Heroicons
- Profile photo and thumbnails should be replaced with your own images
