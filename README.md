# EventHub 🎉

A modern, responsive event discovery platform built with React and TypeScript. EventHub helps users discover and explore local events with an intuitive, clean interface.

![EventHub Homepage](https://via.placeholder.com/1200x600/1a1a2e/ffffff?text=EventHub+Homepage)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Event Discovery**: Browse through a curated list of featured events
- **Category Filtering**: Filter events by categories (Technology, Music, Business, Art, Food, etc.)
- **Search Functionality**: Search for events by name or keywords
- **Event Details**: Each event displays comprehensive information including date, time, location, and description
- **Clean UI/UX**: Modern, dark-themed interface with smooth animations and transitions
- **Statistics Dashboard**: Display platform metrics (500+ Events Listed, 50k+ Happy Attendees, 100+ Cities Covered)

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui integration
- **State Management**: React Hooks (useState, useEffect)
- **Code Quality**: ESLint for linting
- **Package Manager**: npm

## 📁 Project Structure

```
eventHub/
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/           # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── lib/                # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eventhub.git
   cd eventhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Pages & Navigation

### Home Page
- Hero section with compelling call-to-action
- Platform statistics showcase
- Featured events section
- Search and filter functionality

### Events Page
- Complete event listings with category tags
- Advanced filtering options
- Event cards with detailed information
- Registration buttons (UI only)

### Contact Page
- Contact form with validation
- Company contact information
- Professional contact details

## 🎯 Key Features Implemented

### ✅ Required Features
- [x] Top navigation bar with logo and page links
- [x] Hero section with "Discover Events Near You" heading
- [x] Featured Events section with 3-5 sample events
- [x] Event cards with name, date, time, location, and description
- [x] Register buttons (UI implementation)
- [x] Clean, responsive UI design
- [x] Mobile and tablet-friendly layout

### 🌟 Bonus Features Added
- [x] **Advanced Search Bar**: Filter events by name with real-time results
- [x] **Category Filtering**: Filter events by different categories
- [x] **Dynamic Event Loading**: Events loaded from JavaScript objects (simulating API calls)
- [x] **Enhanced UI**: Modern dark theme with gradient backgrounds
- [x] **Interactive Elements**: Hover effects and smooth transitions
- [x] **Statistics Dashboard**: Platform metrics display
- [x] **Professional Contact Form**: Complete contact page with form validation
- [x] **TypeScript Integration**: Enhanced code quality and developer experience

## 🎨 Design Highlights

- **Color Scheme**: Modern dark theme with purple and blue gradients
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Card-based design with consistent spacing
- **Animations**: Subtle hover effects and transitions
- **Accessibility**: Proper contrast ratios and semantic HTML

## 📊 Sample Data

The application includes sample events across various categories:
- Technology conferences
- Music festivals
- Business networking events
- Art exhibitions
- Food festivals

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern event platforms
- Icons and imagery from various open-source resources
- Built with modern web development best practices

---

**Made with ❤️ by [Your Name]**

*EventHub - Connecting communities through amazing events*
