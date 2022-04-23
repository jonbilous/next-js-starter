import { getSession } from "@auth0/nextjs-auth0";
import { HandlerContext } from "@jonbilous/next-js-rpc";

export const getUserSession = (ctx: HandlerContext) => {
  return getSession(ctx.req, ctx.res);
};

export const requireAuth = (ctx: HandlerContext) => {
  const session = getUserSession(ctx);

  if (!session) {
    throw new Error("unauthenticated");
  }

  return session;
};
