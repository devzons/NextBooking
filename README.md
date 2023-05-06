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

| Restaurant                                                                                                               | Item                                                | Location   | Cuisine    |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- | ---------- | ---------- |
| id<br>name<br>main_img<br>description<br>images<br>open_time<br>close_time<br>slug<br>price<br>location_id<br>cuisine_id | id<br>name<br>price<br>description<br>restaurant_id | id<br>name | id<br>name |

### SQL

- After creating database tables, we push the db to prisma

```bash
npx prisma db push

```
