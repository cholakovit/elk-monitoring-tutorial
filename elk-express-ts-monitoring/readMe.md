npm init -y
npm install --save-dev typescript
npx tsc --init

tsconfig.json:
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*"
  ]
}

create src folder
create index.ts inside src folder

npm install --save-dev ts-node nodemon

change package.json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts"
}

write in your src/index.ts -> console.log('Hello TypeScript!')
and run the project: npm run dev from the cli.

npm install express
npm install --save-dev @types/express

npm install express log4js
npm install --save-dev @types/express @types/log4js

create folder helper -> src/helper
create logger.ts inside helper

npm install dotenv
create file .env in the main directory
then in your index.ts add the code

next step is to build the controller. Create a new folder inside src called controller and inside create a new file called AppController.ts
code from pen
next step is to create a new folder inside the src called router. Inside router create a new file called appRouter.ts
code from pen
next step is to update src/index.ts
code from pen
and test to see the results. The app should be running for that goal ('not to forget in cli npm run dev')
pics