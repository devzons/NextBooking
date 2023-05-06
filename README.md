# Restaurant Booking App with Nextjs

## Overview

| 1. Routing File System                                     | 2. Rendering                                                        | 3. Backend                                       | 4. Authentication                                             | 5. Booking and Availability    | 6. Testing                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ------------------------------ | ----------------------------------- |
| Pages<br>Loading<br>Layouts<br>Error handling<br>Not found | CSR vs SSR<br>Caching<br>Server Components<br>Client Components<br> | Postgres<br>Relations<br>Retrieving Data<br><br> | JWT<br>Conditional Rendering<br>Permissions<br>Middleware<br> | Algorithms<br><br><br><br><br> | Unit Tests<br>E2E Tests<br><br><br> |

### Pages

- HomePage '/'
- SearchPage '/seach'
- RestaurantDetailsPage '/restaurant/shakeshack
- RestaurantMenuPage '/restaurant/shakeshack/menu'
- ReservationPage '/reserve/shakeshack'

## Postresql

[https://supabase.com/](https://supabase.com/)

### install Prisma

```bash
npm install prisma@<verson>

npx prisma init
```

### Tables

- Define schema in prisma/schema.prisma

### SQL

- After creating database tables in schema.prisma, we push the db to prisma

```bash
npx prisma db push

```

### upload data to supabase problem

- You will need pages/api/hello.ts, if not, create folders and file.
- inside the api folder, copy paste seed.ts file
- `http://localhost:3000/api/seed` is not working (404 error)
- `http://localhost:3000/api/hello` copy all file to hello.ts will work.
