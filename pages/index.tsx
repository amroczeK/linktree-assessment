import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Container from "@components/Container";
import Button from "@components/Button";
import { useRouter } from "next/router";
import { IUsers, IUser } from "../types/User";

interface Props {
  users: IUsers;
}

const Home: NextPage<Props> = ({ users }) => {
  const router = useRouter();

  const onButtonClick = (username: string) => {
    router.push(`/${username}`);
  };

  return (
    <div className="w-screen h-screen bg-gray-50">
      <Head>
        <title>Linktree Assessment</title>
        <meta name="description" content="Linktree assessment project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex flex-col justify-center items-center w-full h-full gap-4">
          <Image
            data-testid="linktree-logo"
            src="/assets/logo.svg"
            height={"100%"}
            width={300}
            alt="linktree-logo"
            priority
          />
          <ul className="flex flex-col w-60 gap-4">
            {users?.map((user: IUser) => (
              <li data-testid={`user-${user.id}`} key={user.id}>
                <Button
                  onClick={() => {
                    onButtonClick(user.id);
                  }}
                >
                  {`@${user.id}`}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    users: [
      {
        id: "adrianm",
      },
    ],
  };

  return {
    props: {
      users: data.users,
    },
  };
};
