import { Redis } from "@upstash/redis";

let client;

function getClient() {
  if (client !== undefined) return client;

  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  client = url && token ? new Redis({ url, token }) : null;
  return client;
}

// Fails open (allowed: true) when Redis isn't configured, matching the
// no-op-safe pattern already used by lib/consent-store.js.
export async function checkRateLimit(key, limit, windowSeconds) {
  const redis = getClient();
  if (!redis) return { allowed: true };

  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, windowSeconds);
  }
  return { allowed: count <= limit };
}
