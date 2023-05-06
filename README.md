# Restaurant Booking App withe Nextjs

## Overview

1. Routing File System

- Pages
- Loading
- Layouts
- Error handling
- Not found

2. Rendering

- CSR vs SSR
- Caching
- Server Components
- Client Components

3. Backend

- Postgres
- Relations
- Retrieving Data

4. Authentication

- JWT
- Conditional Rendering
- Permissions
- Middleware

5. Booking and Availability

- Algorithms

6. Testing

- Unit Tests
- E2E Tests

## Setup

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
