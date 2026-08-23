import { Redis } from "@upstash/redis";

let client;

function getClient() {
  if (client !== undefined) return client;

  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  client = url && token ? new Redis({ url, token }) : null;
  return client;
}

export async function logConsent(entry) {
  const redis = getClient();
  if (!redis) return { stored: false };
  await redis.rpush("consent:log", JSON.stringify(entry));
  return { stored: true };
}
