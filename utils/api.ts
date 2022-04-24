import { createApi } from "@jonbilous/next-js-rpc/server";
import upstashCache from "./cache";

const api = createApi({
  cacheProvider: { ...upstashCache, defaultTtl: 10000 },
});

export default api;
