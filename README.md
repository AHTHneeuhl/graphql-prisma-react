## End-To-End Type-Safety with GraphQL, Prisma & React

### Runnint Locally

#### Prerequisite

This project required `NodeJs`, `Yarn` and `PNPM`.

Clone the repository first from github, follow below commands

```sh
git clone https://github.com/AHTHneeuhl/graphql-prisma-react.git
```

#### Server Setup

`PNPM` as packange manager has been used for server app.
First create a `.env` file in server root directory and set `DATABASE_URL`. You can use [railway.app](https://railway.app/) as cloud hosted PostgreSQL database.

```sh
# server/.env
DATABASE_URL="YOUR DATABASE URL"
```

Now let's install the packages and seed the data to cloud based database.

```sh
cd server
pnpm build
```

Now migrate the database with prisma and seed.

```sh
pnpm prisma migrate dev --name init
pnpm prisma db seed
```

Now server ready to run, run the server using following command

```sh
pnpm dev
```

#### Client Setup

`Yarn` as package manager has been used for client app, first we will install the packages.

```sh
cd client
yarn install
```

Now will use GraphQL Codegen to get Types of Models from Prisma.

```sh
yarn codegen
```

Now we are ready to run the client app, run using follow command

```sh
yarn dev
```

### References

This app was build by follow [End-To-End Type-Safety with GraphQL, Prisma & React](https://www.prisma.io/blog/e2e-type-safety-graphql-react-1-I2GxIfxkSZ) series.
