This is a [Next.js](https://nextjs.org/) Image component benchmark.

## What do it consists in?
It helps to understand how fast the Image component loads images depending on their initial size, location and so on...
Here is the test list:
- Compare loading time depending on initial size
- Compare loading time when there are multiple images loading in parallel
- Compare loading time for the same image hosted in the project's public folder and on a remote hosting system
- Depending on layouts (TODO)
- Compare loading time when hosted on different platforms (Vercel, VPS, ...)


## Getting Started

1. First, run the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. You'll see the links to the different tests. Click on one of those links.
4. Once the test page loaded, open the browser's Network dev tools
5. Filter on img requests, clear the console
6. Finally, scroll down to see the images loading


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
