# jedlik-express-mongoose-ts-backend-template

This template made on the basis of [Express Typescript tutorial](https://wanago.io/courses/typescript-express-tutorial/).
NODE.JS version: v14.17.6

# Links (technologies, software)
## Heroku link:
https://jedlik-expr-mongoose-backend.herokuapp.com/

## Express
[Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## express-session
[express-session](https://github.com/expressjs/session#readme) - Create a session middleware with the given options.

## Mongoose
Elegant mongodb object modeling for node.js. [Mongoose](https://mongoosejs.com/) provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## TypeScript
[TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## dotenv
[Dotenv](https://github.com/motdotla/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env.

## morgan
[morgan](https://github.com/expressjs/morgan#readme) - HTTP request logger middleware for node.js

## bcrypt
[Bcript](https://github.com/kelektiv/node.bcrypt.js#readme) is a library to help you hash passwords.

## class-validator
Allows use of decorator and non-decorator based validation. Internally uses validator.js to perform validation. [Class-validator](https://github.com/typestack/class-validator#readme) works on both browser and node.js platforms.

## class-transformer
Its ES6 and Typescript era. Nowadays you are working with classes and constructor objects more than ever. [Class-transformer](https://github.com/typestack/class-transformer#readme) allows you to transform plain object to some instance of class and versa. Also it allows to serialize / deserialize object based on criteria.

## cookie-parser
[Cookie-parser](https://github.com/expressjs/cookie-parser#readme) parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

## ESlint
[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems. Many problems ESLint finds can be automatically fixed. Preprocess code, use custom parsers, and write your own rules that work alongside ESLint's built-in rules. You can customize ESLint to work exactly the way you need it for your project.

## Prettier
[Prettier](https://prettier.io/) an opinionated code formatter. Supports many languages, integrates with most editors.

## Jest
[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

## ts-jest
[ts-jest](https://kulshekhar.github.io/ts-jest/) is a Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

## ts-node
[ts-node](https://typestrong.org/ts-node/docs/) is a TypeScript execution engine and REPL for Node.js.
It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

## nodemon
[Nodemon](https://nodemon.io/) is a utility depended on by over 1.5 million projects, that will monitor for any changes in your source and automatically restart your server.

## MongoDB Cloud, Atlas
MongoDB Cloud is the best way to build data-driven applications. The core of MongoDB Cloud is [MongoDB Atlas](https://www.mongodb.com/cloud), a fully managed cloud database for modern applications. Atlas is the best way to run MongoDB, the leading modern database. MongoDB’s document model is the fastest way to innovate, bringing flexibility and ease of use to the database.

## Postman
[Postman](https://www.postman.com/) is an API platform for building, testing and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.<br>
[Download Postman](https://www.postman.com/downloads/)


# Frontend example

## App.ts
```
onMounted(() => {
   usersStore.autoLogin();
});

window.addEventListener(
    "beforeunload",
    () => {
      usersStore.logOut(true);
    },
    false
);
```

## userStore.ts
```
async autoLogin(): Promise<void> {
      Loading.show();
      $axios
        .post("auth/autologin")
        .then((res) => {
          if (res.status == 404) {
            this.loggedUser = null;
          } else {
            this.loggedUser = res.data;
          }
          Loading.hide();
        })
        .catch((error) => {
          this.loggedUser = null;
          Loading.hide();
          Notify.create({
            message: `Auto login not aviable! ${error.response.data.message}`,
            color: "negative",
          });
        });
},
```