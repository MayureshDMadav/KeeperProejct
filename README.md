# Keeper - Notes Taking App

A simple and elegant notes taking application built with React and Vite. Keeper allows users to create, edit, delete, and manage their notes with a clean and intuitive interface.

## Features

- ✏️ **Create Notes**: Add new notes with title and content
- 📝 **Edit Notes**: Click on any note to edit it inline
- 🗑️ **Delete Notes**: Remove notes with a single click
- 💾 **Persistent Storage**: Notes are saved in localStorage
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Instant updates without page refresh
- 🚨 **Input Validation**: Alerts for empty note submissions

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/keeper-notes-app.git
   cd keeper-notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run dev
# or
yarn dev
```

## Usage

### Adding a Note
1. Click on the "Take a note..." input field
2. Enter a title (optional) and content for your note
3. Click the "Add" button or press Enter
4. Your note will be saved and displayed in the notes grid

### Editing a Note
1. Click on any existing note card
2. Modify the title or content as needed
3. Click "Save" to confirm changes or "Cancel" to discard

### Deleting a Note
1. Hover over the note you want to delete
2. Click the red "X" button that appears in the top-right corner
3. The note will be permanently removed

## Project Structure

```
keeper-notes-app/
├── src/
│   ├── components/
│   │   └── noteCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite Configuration

Vite configuration is available in `vite.config.js` for build optimization and development server settings.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Search functionality
- [ ] Categories/Tags for notes
- [ ] Export notes to PDF/Text
- [ ] Dark mode theme
- [ ] Note sharing capabilities
- [ ] Rich text editor
- [ ] Cloud synchronization

## Deployed Url

https://keeperproejct.onrender.com
