# Storyblok Demo

This demo project uses Nuxt3

## Setup

Make sure you have the following CLIs installed:

```bash
# storyblok
npm install storyblok -g

# mkcert
brew install mkcert
```

Make sure to install the dependencies:

```bash
npm install
npm run prepare-local
```

Create a `.env` file from `.env.local` and fill in the `STORYBLOK_TOKEN` and `STORYBLOK_SPACE_ID` fields from your storyblok space

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev:https
```
