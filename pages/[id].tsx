import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IUser } from "../types/User";
import Head from "next/head";
import Container from "@components/Container";

const UserLinks: NextPage = () => {
  return (
    <div className="bg-purple-600 w-screen h-screen">
      <Head>
        <title>Linktree Assessment</title>
        <meta name="description" content="Linktree assessment project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container></Container>
    </div>
  );
};

export default UserLinks;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const data = {
    users: [
      {
        id: "adrianm",
        designPreferences: {
          backgroundColor: "",
          primaryColor: "",
          secondaryColor: "",
        },
        links: {
          socials: [
            {
              socialsName: "",
              url: "",
            },
          ],
          music: {
            songName: "",
            platforms: [
              {
                platformName: "",
                url: "",
              },
            ],
          },

          shows: [{ date: "", location: "", ticketsAvailable: true }],
        },
      },
    ],
  };

  const user = data.users.find((x) => x.id === id);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = {
    users: [
      {
        id: "adrianm",
        designPreferences: {
          backgroundColor: "",
          primaryColor: "",
          secondaryColor: "",
        },
        links: {
          socials: [
            {
              socialsName: "",
              url: "",
            },
          ],
          music: {
            songName: "",
            platforms: [
              {
                platformName: "",
                url: "",
              },
            ],
          },

          shows: [{ date: "", location: "", ticketsAvailable: true }],
        },
      },
    ],
  };

  return {
    paths: data.users?.map(({ id }) => {
      return {
        params: { id },
      };
    }),
    fallback: "blocking",
  };
};
