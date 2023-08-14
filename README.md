# OverCalculated

The Over Complicated Calculator Application with Secure Authentication.

![OverCalculated logo](path-to-logo.png) _← Replace with the actual path if you have a logo._

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Design Document](#design-document)
- [Installation & Setup](#installation--setup)
- [How to Use](#how-to-use)
- [Tech Stack](#tech-stack)
- [Feedback & Issues](#feedback-and-issues)
- [Further Reading & Examples](#more-supabase-examples)

## Overview

OverCalculated elevates the calculator experience by merging intricate arithmetic capabilities with state-of-the-art authentication, thanks to Supabase and Vercel. With this unique blend, users experience unprecedented functionality and peace of mind.

## Features

- **Advanced Arithmetic**: Master complex calculations with features like %, √, and ^.
- **Memory Functions**: Empower your sessions with M+, M-, MR, and MC.
- **Secure User Authentication**: Effortlessly manage sessions throughout the entire app using Supabase Auth with cookies.
- **Calculation History**: A peek into your past calculations is just a click away.

## Design Document

For a comprehensive overview of the design and architecture, check out our design document: [docs/DESIGN DOC.md](docs/DESIGN DOC.md).

## Installation & Setup

1. **Deploy Your Own**:  
   Use Vercel's deployment to set up and deploy your version of OverCalculated, powered by Supabase and Next.js.  
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/OverCalculated&project-name=OverCalculated&repository-name=OverCalculated&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv)

2. **Setting Up Environment**:  
   Rename `.env.local.example` to `.env.local` and update the values for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` using [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api).

3. **Run Locally**:  
   After setting up, use the following commands to run locally:
   ```bash
   npm install  # to install dependencies
   npm run dev  # to start local development server
   ```

> Note: For local development, you can run Supabase locally. Explore [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development).

## How to Use

- **Client & Server Components**:  
   For examples on creating a Supabase client, see the [`/app/_examples`](./app/_examples/) directory. This includes samples for Client Components, Server Components, Route Handlers, and Server Actions.

- **Database Setup (Optional)**:  
   To set up a `todo` table and seed data, head over to [your project's SQL Editor](https://app.supabase.com/project/_/sql). Use the contents from [init.sql](./supabase/migrations/20230618024722_init.sql) to establish the table. Seed it using [seed.sql](./supabase/seed.sql) if desired.

## Tech Stack

- **Hosting & Initialization**: Project hosted on Vercel and initialized via Vercel.
- **Authentication**: Secure user authentication using Supabase.
- **Framework**: Next.js for frontend development.

## Feedback & Issues

For feedback or issues, kindly create a new ticket at the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase Examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)
- [Next.js Auth Helpers Docs](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

---

Conclude your README with personal contact information, details of any collaborators, acknowledgments, or other sections that might be relevant.
