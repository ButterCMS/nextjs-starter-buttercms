# Next.js + ButterCMS Starter Project
Live Demo: https://nextjs-starter-buttercms.vercel.app/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fnextjs-starter-buttercms)


This Next.js starter project fully integrates with dynamic sample content from your ButterCMS account, including main menu, pages, blog posts, categories, and tags, all with a beautiful, custom theme with already-implemented search functionality. All of the included sample content is automatically created in your account dashboard when you sign up for a free trial of ButterCMS.

Once created, this project can be easily and quickly deployed to Vercel from the CLI ([see instructions below](#deploy-on-vercel))


## 1) Installation

First, install the dependencies by running one of these commands, depending on your current setup:
```bash
npm install
# or
yarn install
```
After running the command, you should see a message:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```
Congratulations! Your starter project is now live and can be viewed at [http://localhost:3000](http://localhost:3000).

If you use yarn, you might want to delete `package-lock.json` file to avoid possible  resolution inconsistencies caused by unsynchronized lock files.

## 2) Set API Token

For Next.js to be able to fetch your ButterCMS content properly, you need to add your API token as an environment variable. To do that, copy `env.sample` and edit it, so that includes your API token.

```bash
$ cp env.sample .env
```
```
# .env
NEXT_PUBLIC_BUTTER_CMS_API_KEY=<Your API Token>
```

## 3) Run the local server
You'll want to run server any time you want to view the project locally:

```bash
npm run dev # or yarn dev
```

To quit the server press CONTROL-C.

### Build the app
Use one of these commands which build the application for production usage:

```bash
npm run build # or yarn build
```

### Run production server
After building your app run one of these commands to start a Next.js production server:

```bash
npm run start # or yarn start
```

## 4) Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Create a Vercel account at https://vercel.com/signup
2. Download [the CLI](https://vercel.com/download):
```bash
npm i -g vercel
```
3. Add the API key as a secret `vercel secrets add butter-cms-api-key "YOUR_API_KEY"`
4. Run `vercel` at the project root

## Preview mode
To see what application really look like before it’s published, add `PREVIEW=true` to your `.env` file and restart your server. From within your butter account, you can also preview changes to the app using our built-in iframe previewer. For more information, see [https://buttercms.com/kb/preview-urls](https://buttercms.com/kb/preview-urls).
