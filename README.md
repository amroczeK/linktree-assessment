This is a [Next.js](https://nextjs.org/) project for the Linktree interview assessment. Project is deployed to Vercel and assessible: [link to website](https://linktree-assessment.vercel.app/).

The application was developed using the NextJs framework (which utilizing the React library). The users page is dynamically generated using getStaticPaths and getStaticProps and the user data/design preferences.

Given more time I would have used getStaticPaths and getStaticProps to fetch data from a database like MongoDB where the users data would be stored. Instead the user data is contained within getStaticProps acting as an in-memory database.

The user model is defined in the types folder under User.tsx, portions of the model are separated out into their individual interfaces/types to easily export and utilize throughout the application.

There are some TODOS defined, not all of the unit tests I wanted to implement were completed due to a SvgIcon component rendering issue which I am yet to resolve, I have documented the issue in the todo.

## Getting Started

First, install dependencies
```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

First, install dependencies
```bash
npm install
```

Second, run the development server:

```bash
npm run test
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
