import { getUserSession } from "utils/ctx";
import api from "utils/api";
import db from "utils/db";
import zod from "zod";

const ctx = {
  user: getUserSession,
};

const schema = zod.null();

const getImages = api.createHandler({
  url: "/api/functions",
  fn: async (params, ctx) => {
    return db.image.findMany();
  },
  schema,
  ctx,
});

export type ImageQuery = typeof getImages;

export default getImages;
