Created using NextJS@15,Typescript,Redux,Shadcn,Framer

To set up

1. first clone the repo using git clone https://github.com/shafaqarefin/AI-Agent-Catalog.git

2.then run npm install

3. Create a Google Cloud Project and OAuth Credentials:

Go to Google Cloud Console.

Create a new project.

Navigate to APIs & Services > Credentials.

Click Create Credentials > OAuth Client ID.

Select Web application.

Add these URLs:

Authorized JavaScript origins: http://localhost:3000

Authorized redirect URIs: http://localhost:3000/api/auth/callback/google

Create the client and copy the Client ID and Client Secret found by clicking info icon on the right.

Set Environment Variables:

In the project root, create a file called .env.local.

Add the following lines, replacing with your actual Client ID and Secret:
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000

4.type in npm run dev

Decisions and Challenges faced included making sure fetching is done by server component but dispatching the fetched data to redux store needed another 'HydrationAgent' component which at first received the fetched data from server component and then being a client component was allowed to at first render dispatch the fetched data to redux store which the dashboard/page.tsx was not allowed to do

To implement next-auth i followed their docs by installing next auth,setting up auth folders where my route.ts file exported get/post handlers.In my lib/auth.ts i used NextAuth hook which provided signin signout and auth functions for google.I used them in my login,logout and authentication respectively.
