import { useUser } from "@auth0/nextjs-auth0";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";

interface ServerProps {}

export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  req
) => {
  return { props: {} };
};

const Home: NextPage<ServerProps> = (props) => {
  const user = useUser();

  return (
    <VStack alignItems={"stretch"}>
      <Flex padding={4}>
        <HStack>
          <Text fontWeight={"bold"}>Next JS Starter</Text>
        </HStack>

        <HStack ml="auto">
          <div>{user.user?.email}</div>
          {!user.user && <a href="/api/auth/login">Login</a>}
          {user.user && <a href="/api/auth/logout">Logout</a>}
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Home;
