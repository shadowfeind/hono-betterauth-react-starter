Auth Starter — Hono + Better auth + Neon Postgres + Zod (Cloudflare Workers) · React + Zustand + Zod + TanStack Query/Router + React Hook Form

A production‑ready auth starter that keeps things type‑safe, lightweight, and edge‑friendly.

Backend: Hono (Cloudflare Workers), Neon Postgres, Zod, JWT cookies.
Frontend: React, TanStack Router, TanStack Query, Zustand, React Hook Form, Zod.

Opinionated but minimal: clean boundaries, stable DX, and no magic. Swap pieces without rewiring the whole app.

✨ Features

Email/password auth (register, login, logout, refresh) with HttpOnly secure cookies

Zod for runtime validation + TypeScript inference on both sides

Neon Postgres serverless database

Hono REST API on Cloudflare Workers with clear error envelopes

TanStack Query for cache, retries, mutations; Zustand for local UI auth state

TanStack Router for file‑like routing and protected routes

React Hook Form + Zod Resolver for fast, accessible forms

CORS, CSRF‑aware cookie settings, and security headers defaults

Ready for edge: zero cold boot package bloat, fast dev via Wrangler
