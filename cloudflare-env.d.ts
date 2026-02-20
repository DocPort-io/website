/// <reference types="@cloudflare/workers-types" />

// Extends the CloudflareEnv interface declared by @opennextjs/cloudflare
// with the bindings defined in wrangler.jsonc.
interface CloudflareEnv {
  DB: D1Database;
}
