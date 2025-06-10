# **_nec_** Ingenium 2025

Repository for the website of **_nec_** Ingenium 2025.

## Requirements

The requirements to run the development server and build the distribution files:

-   [Node.js 18.18](https://nodejs.org/) or later (along with npm)

To install dependencies, navigate to project root and run:

```
npm i
```

## Development Server

Provided requirements are fulfilled, navigate to project root and run:

```
npm run dev
```

This should start the Next.js development server on [localhost:3000](http://localhost:3000) by default.

## Static HTML Export (Static Site Generation)

Provided requirements are fulfilled, navigate to project root and run:

```
npm run build
```

This creates a `dist/` directory at project root containing the distribution that can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.
