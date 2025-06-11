# Freeman's Portfolio - React/TypeScript Version

This project has been converted from a static HTML/JS/CSS website to a modern React/TypeScript application using styled-components.

## Original Structure
The original project consisted of:
- `index.html` - Home page with terminal-style green theme and typing animation
- `about.html` - About page with medieval stone theme and plus animation
- `contact.html` - Contact page with golden theme and arrow animation
- Corresponding CSS and JavaScript files for each page

## New React Structure
```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Header with navigation
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page (converted from index.html)
│   ├── About.tsx       # About page (converted from about.html)
│   └── Contact.tsx     # Contact page (converted from contact.html)
├── styles/             # Styled-components styling
│   ├── globalStyles.ts # Global styles and CSS reset
│   ├── HomeStyles.ts   # Home page styled-components
│   ├── AboutStyles.ts  # About page styled-components
│   └── ContactStyles.ts # Contact page styled-components
├── hooks/              # Custom React hooks
│   └── useTitleAnimation.ts # Title animation logic
├── App.tsx             # Main app component with routing
└── index.tsx           # Entry point
```

## Features Preserved
- ✅ Three distinct page themes (terminal green, medieval stone, golden)
- ✅ Animated titles with different effects per page:
  - Home: Typewriter effect with blinking cursor
  - About: Plus symbols animation
  - Contact: Arrow symbols animation
- ✅ Responsive navigation
- ✅ Contact form functionality
- ✅ Custom fonts (Stonehenge, Thryn, IBM Plex Mono)

## New Features Added
- ✅ React Router for client-side navigation
- ✅ TypeScript for type safety
- ✅ Styled-components for CSS-in-JS styling
- ✅ Custom hooks for animation logic
- ✅ Component-based architecture
- ✅ Form state management

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`.

### Building for Production
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

## Project Structure Details

### Components
- **Header**: Reusable header component that accepts styled-components as props for different themes
- **Navigation**: Navigation component with React Router Links
- **Footer**: Simple footer component with theme-aware styling

### Pages
- **Home**: Features the typing animation and terminal theme
- **About**: Features the plus animation and medieval theme  
- **Contact**: Features the arrow animation, golden theme, and functional contact form

### Styling with Styled-Components
- Uses styled-components for CSS-in-JS styling approach
- Maintains the original three distinct themes
- Global styles include the Meyer reset and custom font definitions
- Component-scoped styling prevents CSS conflicts
- No CSS module import issues

### Animations
- Converted original JavaScript animations to TypeScript custom hooks
- Each page has its own animation hook that manages the title text state
- Animations are properly cleaned up when components unmount

## Browser Support
This project supports all modern browsers that support ES6+ features.

## License
This project is for portfolio purposes. 