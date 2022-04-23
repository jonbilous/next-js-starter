import { client } from "@jonbilous/next-js-rpc";
import type { InferResponse } from "@jonbilous/next-js-rpc";
import type { GetServerSideProps, NextPage } from "next";
import type { ImageQuery } from "pages/api/functions";
import getImages from "pages/api/functions";

type ServerProps = {
  locations: InferResponse<ImageQuery>;
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  ctx
) => {
  const locations = await getImages.ssr(null, ctx);

  return { props: { locations } };
};

const Home: NextPage<ServerProps> = (props) => {
  const query = client.useQuery<ImageQuery>("/api/functions", null);

  return <div></div>;
};

export default Home;
