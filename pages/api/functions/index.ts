import { createHandler } from "@jonbilous/next-js-rpc/";
import { getUserSession } from "utils/ctx";
import db from "utils/db";
import zod from "zod";

const ctx = {
  user: getUserSession,
};

const schema = zod.null();

const getImages = createHandler({
  url: "/api/functions",
  fn: async (params, ctx) => {
    return db.image.findMany();
  },
  schema,
  ctx,
});

export type ImageQuery = typeof getImages;

export default getImages;
