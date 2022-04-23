import { cache } from "@jonbilous/utils";

export default cache.createUpstashRedisCache(
  {
    url: process.env.UPSTASH_URL!,
    token: process.env.UPSTASH_TOKEN!,
  },
  10000
);
