# MiniGames

MiniGames is a responsive single-page home page for discovering and playing
casual browser games. The project was created for the Rolling Scopes School
MiniGames qualifying-stage task.

## Features

- Responsive home page for desktop, tablet, and mobile layouts
- Header navigation with a mobile burger menu
- Hero section with a featured game
- New games carousel layout
- Top players leaderboard
- Game developer call-to-action section
- Footer with navigation and community links
- Sass design tokens and responsive breakpoint mixins

## Tech Stack

- TypeScript
- Vite
- Sass
- ESLint
- Prettier
- Husky and lint-staged

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Script             | Description                                       |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Starts the Vite development server                |
| `npm run build`    | Type-checks and builds the project for production |
| `npm run preview`  | Serves the production build locally               |
| `npm run lint`     | Runs ESLint across the repository                 |
| `npm run lint:fix` | Fixes automatically fixable ESLint issues         |
| `npm run format`   | Formats source TypeScript, Sass, and HTML files   |

## Project Structure

```text
src/
	assets/                 Images and icons used by the interface
	components/             Page sections and their styles
		footer/
		gameDeveloper/
		header/
		hero/
		newGames/
		topPlayers/
	data/                   Mock game, leaderboard, and category data
	styles/                 Global styles, tokens, and breakpoints
	main.ts                 SPA entry point
public/                   Static public assets
```

Each page section is implemented as a TypeScript component with a matching
Sass stylesheet. The application is mounted into the `#app` element from
`index.html`.

## Git Hooks

The Husky pre-commit hook runs lint-staged. Staged TypeScript, Sass, HTML,
CSS, and JSON files are checked or formatted before a commit is created.

## License

This project was created for educational purposes.
