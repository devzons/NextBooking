# Restaurant Booking App with Nextjs

## Overview

| 1. Routing File System                                               | 2. Rendering                                                                | 3. Backend                                             |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| - Pages<br>- Loading<br>- Layouts<br>- Error handling<br>- Not found | - CSR vs SSR<br>- Caching<br>- Server Components<br>- Client Components<br> | - Postgres<br>- Relations<br>- Retrieving Data<br><br> |

| 4. Authentication                                                 | 5. Booking and Availability | 6. Testing                          |
| ----------------------------------------------------------------- | --------------------------- | ----------------------------------- |
| - JWT<br>- Conditional Rendering<br>- Permissions<br>- Middleware | - Algorithms <br><br><br>   | - Unit Tests<br>- E2E Tests<br><br> |

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

### Common Error Handling with this project

#### Supabase side error

```bash
Unhandled Runtime Error
Error:
Invalid `prisma.restaurant.findManu()` invocation:
...
ConnectorError(...)
```

#### Solution

- Restart server: Project Settings -> Restart server

## Authentication

### Server side Authentication

[https://mui.com/material-ui/react-modal/](https://mui.com/material-ui/react-modal/)

- When click sign in or sign up button, open modal to input users credentials
- need dependencies: @emotion/react, @emotion/styled

#### Make an HTTP request to an auth endpoint

Endpoint: `/api/auth/signup`

`npm install @types/validator`
`npm install @types/bcrypt`
`npm install jose

[https://jwt.io/](https://jwt.io/)

#### Sign up

1. Validate the user input - validator [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator)
2. Validate user already exist
3. Hash the password
4. Save user in DB
5. Create a JWT token
6. Send JWT to client

#### Sign in

Endpoint: `/api/auth/signin`

1. Validate the user input
2. Validate user already exist
3. Compare hashed password
4. Create JWT and send it to the user

#### Make an HTTP request to an auth endpoint with token in header

Endpoint: `/api/auth/me`

Use `npm install jsonwebtoken` instead of jose, but might have some issues with server response

1. Extract token from header
2. Verify token
3. Decode the token
4. Fetch user from DB
5. Send user to client

#### Middleware

- Making all HTTP endpoints secure like above is not ideal, best practice
- We use a middleware from Next.js
- It works between token and any endpoints
- create `middleware.ts` file in your project root directory

### Client side Authentication

`npm install axios`

#### Global Context

|         |               | unauthenticated | press<br>signin button | user<br>response back | error<br>response |
| ------- | ------------- | --------------- | ---------------------- | --------------------- | ----------------- |
| loading | boolean       | false           | true                   | false                 | false             |
| data    | User / null   | null            | null                   | `{email: ''...}`      | null              |
| error   | string / null | null            | null                   | null                  | Error messages    |

---

## Build an Availability system

1. Availability is based on tables

2. Tables can only have 2 or 4 seats

### Dependencies

`npm install react-datepicker @types/react-datepicker`

- when styling issue:

```bash
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
```

#### API Endpoint

`/restaurant/[slug]/availability?partySize=4&day=2023-04-21&time=22:30:00.000Z`

1. Find all search times - search all 1 hour before and after the specified by 30 minutes

- example:

```javascript
;[
  '02:00:00.000Z',
  '02:30:00.000Z',
  '03:00:00.000Z',
  '03:30:00.000Z',
  '03:00:00.000Z',
]
```

- times.ts: time, searchTimes

2. Fetch the Bookings

```javascript
[
  {
    number_of_people: 3,
    booking_time: "2023-05-22T030:00:00.000Z"
    tables: [{table_id: 1}]
  }
  ...
]
```

3. Compress the booking - compress into an object where the datetime is the key and an object of th table ids is the value

4. Fetch the restaurant tables

5. Reformat the search times to include the date, time, and tables

6. Filter out the booked tables

7. Determine if a timeslot is available based on the tables and party size

```javascript
[
  {
    time: "02:30:00.000Z"
    available: true
  },
  {
    time: "03:00:00.000Z"
    available: false
  }
]
```

8. Filter by restaurant time window
