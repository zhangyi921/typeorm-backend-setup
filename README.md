# VPI backend with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `npm start` command

Steps to run when change domain model

1. Modify the model in entity folder.
2. Run `npm run gm <migration-name>` command. (Generate Migration)
3. Run `npm run am` command. (Apply Migration)

Guide lines

1. If you are adding a new required column remember to set a default value.
2. When add new column set length.
3. Use "Lazy relations" in entity as much as possible